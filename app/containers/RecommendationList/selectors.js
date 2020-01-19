import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { reduce } from 'lodash/collection';

import {
  selectEntities,
  selectEntitiesSearchQuery,
  selectWithoutQuery,
  selectConnectionQuery,
  selectCategoryQuery,
  selectSpecialCategoryQuery,
  selectSortByQuery,
  selectSortOrderQuery,
  selectRecommendationConnections,
  selectTaxonomiesSorted,
  selectRecommendationTaxonomies as selectRecTaxonomies,
} from 'containers/App/selectors';

import {
  filterEntitiesByConnection,
  filterEntitiesByCategories,
  filterEntitiesWithoutAssociation,
  prepareTaxonomiesMultiple,
  entitiesSetCategoryIds,
  getEntityCategories,
  getEntityConnections,
  attributesEqual,
  testEntitySpecialCategoryAssociation,
} from 'utils/entities';

import { sortEntities, getSortOption } from 'utils/sort';

import { CONFIG } from './constants';


export const selectRecommendationTaxonomies = createSelector(
  selectRecTaxonomies,
  (taxonomies) =>
    taxonomies.map((tax) => {
      if (CONFIG.taxonomies.specialOptions) {
        const special = CONFIG.taxonomies.specialOptions[parseInt(tax.get('id'), 10)];
        if (special && special.attribute === 'most_recent') {
          if (tax.getIn(['attributes', 'parent_id'])) {
            const parent = taxonomies.get(tax.getIn(['attributes', 'parent_id']).toString());
            if (parent) {
              return tax.set('categories', tax.get('categories').map((cat) => {
                const parentCat = parent.get('categories').find((c) =>
                  attributesEqual(c.get('id'), cat.getIn(['attributes', 'parent_id']))
                );
                const siblings = parentCat && tax.get('categories').filter((c) =>
                  attributesEqual(parentCat.get('id'), c.getIn(['attributes', 'parent_id']))
                );
                if (siblings) {
                  if (siblings.size === 1) {
                    return cat.set(special.attribute, true);
                  }
                  const sortedSiblings = siblings.sortBy(
                    (c) => c.getIn(['attributes', 'date']),
                    (a, b) => {
                      const aIsDate = new Date(a) instanceof Date && !isNaN(new Date(a));
                      const bIsDate = new Date(b) instanceof Date && !isNaN(new Date(b));
                      if (aIsDate && !bIsDate) {
                        return -1;
                      } else if (!aIsDate && bIsDate) {
                        return 1;
                      } else if (aIsDate && bIsDate) {
                        return new Date(a) < new Date(b) ? 1 : -1;
                      }
                      return 0;
                    }
                  );
                  return cat.set(
                    special.attribute,
                    attributesEqual(
                      sortedSiblings.first().get('id'),
                      cat.get('id'),
                    ),
                  );
                }
                return cat;
              }));
            }
            return tax;
          }
          return tax;
        }
        return tax;
      }
      return tax;
    })
);

const selectRecommendationsNested = createSelector(
  (state, locationQuery) => selectEntitiesSearchQuery(state, {
    path: 'recommendations',
    searchAttributes: CONFIG.search || ['reference', 'title'],
    locationQuery,
  }),
  (state) => selectRecommendationConnections(state),
  (state) => selectEntities(state, 'recommendation_categories'),
  (state) => selectEntities(state, 'recommendation_measures'),
  (state) => selectEntities(state, 'categories'),
  (entities, connections, entityCategories, entityMeasures, categories) =>
    entities.map((entity) => entity
      .set('categories', getEntityCategories(entity.get('id'), entityCategories, 'recommendation_id', categories))
      .set('measures', getEntityConnections(
        entity.get('id'),
        entityMeasures,
        'measure_id',
        'recommendation_id',
        connections.get('measures'),
      ))
    )
);
const selectRecommendationsWithout = createSelector(
  selectRecommendationsNested,
  (state) => selectEntities(state, 'categories'),
  selectWithoutQuery,
  (entities, categories, query) => query
    ? filterEntitiesWithoutAssociation(entities, categories, query)
    : entities
);
const selectRecommendationsByConnections = createSelector(
  selectRecommendationsWithout,
  selectConnectionQuery,
  (entities, query) => query
    ? filterEntitiesByConnection(entities, query)
    : entities
);
const selectRecommendationsByCategories = createSelector(
  selectRecommendationsByConnections,
  selectCategoryQuery,
  (entities, query) => query
    ? filterEntitiesByCategories(entities, query)
    : entities
);
const selectRecommendationsBySpecialCategories = createSelector(
  selectRecommendationsByCategories,
  selectRecommendationTaxonomies,
  selectSpecialCategoryQuery,
  (entities, taxonomies, query) => {
    if (CONFIG.taxonomies.specialOptions) {
      let queryTaxId = '';
      let value = '';
      if (query && query.indexOf(':') > -1) {
        queryTaxId = query.split(':')[0];
        value = query.split(':')[1];
      }
      return reduce(CONFIG.taxonomies.specialOptions, (memo, option, taxId) => {
        if (option.default && !query) {
          const taxonomy = taxonomies.get(taxId);
          return memo.filter((entity) =>
            testEntitySpecialCategoryAssociation(
              entity,
              taxonomy.get('categories'),
              option.attribute,
            )
          );
        }
        if (attributesEqual(queryTaxId, taxId) && value === option.attribute) {
          const taxonomy = taxonomies.get(taxId);
          return memo.filter((entity) =>
            testEntitySpecialCategoryAssociation(
              entity,
              taxonomy.get('categories'),
              'most_recent',
            )
          );
        }
        return memo;
      }, entities);
    }
    // if (query && query === '0') {
    //   console.log('not special')
    // }
    return entities;
  });
// kicks off series of cascading selectors
// 1. selectEntitiesWhere filters by attribute
// 2. selectEntitiesSearchQuery filters by keyword
// 3. selectRecommendationsNested will nest related entities
// 4. selectRecommendationsWithout will filter by absence of taxonomy or connection
// 5. selectRecommendationsByConnections will filter by specific connection
// 6. selectRecommendationsByCategories will filter by specific categories
export const selectRecommendations = createSelector(
  selectRecommendationsBySpecialCategories,
  selectSortByQuery,
  selectSortOrderQuery,
  (entities, sort, order) => {
    const sortOption = getSortOption(CONFIG.sorting, sort);
    return sortEntities(
      entities,
      order || (sortOption ? sortOption.order : 'desc'),
      sort || (sortOption ? sortOption.attribute : 'id'),
      sortOption ? sortOption.type : 'string'
    );
  }
);

export const selectConnectedTaxonomies = createSelector(
  (state) => selectTaxonomiesSorted(state),
  (state) => selectEntities(state, 'categories'),
  (taxonomies, categories) =>
    prepareTaxonomiesMultiple(taxonomies, categories, ['tags_measures'])
);

export const selectConnections = createSelector(
  (state) => selectEntities(state, 'measures'),
  (state) => selectEntities(state, 'measure_categories'),
  (measures, measureCategories) =>
    Map().set('measures', entitiesSetCategoryIds(measures, 'measure_id', measureCategories))
);
