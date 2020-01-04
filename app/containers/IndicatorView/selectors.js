import { createSelector } from 'reselect';

import { ENABLE_SDGS } from 'themes/config';

import {
  selectEntity,
  selectEntities,
  selectMeasureConnections,
  selectSdgTargetConnections,
} from 'containers/App/selectors';

import {
  entitySetSingles,
  entitySetSingle,
  attributesEqual,
  entitiesIsAssociated,
  getAllCategories,
} from 'utils/entities';

import { sortEntities } from 'utils/sort';

export const selectViewEntity = createSelector(
  (state, id) => selectEntity(state, { path: 'indicators', id }),
  (state) => selectEntities(state, 'users'),
  (entity, users) => entitySetSingles(entity, [
    {
      related: users,
      key: 'user',
      relatedKey: 'last_modified_user_id',
    },
    {
      related: users,
      key: 'manager',
      relatedKey: 'manager_id',
    },
  ])
);
export const selectMeasuresAssociated = createSelector(
  (state, id) => id,
  (state) => selectEntities(state, 'measures'),
  (state) => selectEntities(state, 'measure_indicators'),
  (id, entities, associations) =>
    entitiesIsAssociated(entities, 'measure_id', associations, 'indicator_id', id)
);
// all connected measures
export const selectMeasures = createSelector(
  selectMeasuresAssociated,
  (state) => selectMeasureConnections(state),
  (state) => selectEntities(state, 'sdgtarget_measures'),
  (state) => selectEntities(state, 'recommendation_measures'),
  (state) => selectEntities(state, 'measure_categories'),
  (state) => selectEntities(state, 'measure_indicators'),
  (state) => selectEntities(state, 'categories'),
  (measures, connections, measureTargets, measureRecommendations, measureCategories, measureIndicators, categories) =>
    measures && measures
    .map((measure) => measure
      .set('categories', getAllCategories(measure.get('id'), measureCategories, 'measure_id', categories))
      .set('sdgtargets', ENABLE_SDGS && measureTargets && measureTargets
        .filter((association) =>
          attributesEqual(association.getIn(['attributes', 'measure_id']), measure.get('id'))
          && connections.getIn(['sdgtargets', association.getIn(['attributes', 'sdgtarget_id']).toString()])
        )
        .map((association) => association.getIn(['attributes', 'sdgtarget_id']))
      )
      .set('recommendations', measureRecommendations && measureRecommendations
        .filter((association) =>
          attributesEqual(association.getIn(['attributes', 'measure_id']), measure.get('id'))
          && connections.getIn(['recommendations', association.getIn(['attributes', 'recommendation_id']).toString()])
        )
        .map((association) => association.getIn(['attributes', 'recommendation_id']))
      )
      .set('indicators', measureIndicators && measureIndicators
        .filter((association) =>
          attributesEqual(association.getIn(['attributes', 'measure_id']), measure.get('id'))
          && connections.getIn(['indicators', association.getIn(['attributes', 'indicator_id']).toString()])
        )
        .map((association) => association.getIn(['attributes', 'indicator_id']))
      )
    )
);
export const selectTargetsAssociated = createSelector(
  (state, id) => id,
  (state) => selectEntities(state, 'sdgtargets'),
  (state) => selectEntities(state, 'sdgtarget_indicators'),
  (id, entities, associations) =>
    entitiesIsAssociated(entities, 'sdgtarget_id', associations, 'indicator_id', id)
);
// all connected sdgTargets
export const selectSdgTargets = createSelector(
  selectTargetsAssociated,
  (state) => selectSdgTargetConnections(state),
  (state) => selectEntities(state, 'sdgtarget_measures'),
  (state) => selectEntities(state, 'sdgtarget_categories'),
  (state) => selectEntities(state, 'sdgtarget_indicators'),
  (state) => selectEntities(state, 'categories'),
  (targets, connections, targetMeasures, targetCategories, targetIndicators, categories) =>
    targets && targetIndicators && targets
    .map((target) => target
      .set('categories', getAllCategories(target.get('id'), targetCategories, 'sdgtarget_id', categories))
      .set('measures', targetMeasures && targetMeasures
        .filter((association) =>
          attributesEqual(association.getIn(['attributes', 'sdgtarget_id']), target.get('id'))
          && connections.getIn(['measures', association.getIn(['attributes', 'measure_id']).toString()])
        )
        .map((association) => association.getIn(['attributes', 'measure_id']))
      )
      .set('indicators', targetIndicators && targetIndicators
        .filter((association) =>
          attributesEqual(association.getIn(['attributes', 'sdgtarget_id']), target.get('id'))
          && connections.getIn(['indicators', association.getIn(['attributes', 'indicator_id']).toString()])
        )
        .map((association) => association.getIn(['attributes', 'indicator_id']))
      )
    )
);

// all connected reports
export const selectReports = createSelector(
  (state, id) => id,
  (state) => selectEntities(state, 'progress_reports'),
  (state) => selectEntities(state, 'due_dates'),
  (state) => selectEntities(state, 'users'),
  (id, reports, dates, users) =>
    reports && sortEntities(
      reports
        .filter((report) => attributesEqual(report.getIn(['attributes', 'indicator_id']), id))
        .map((report) =>
          entitySetSingle(
            report.set('user',
              users.find((user) => report.getIn(['attributes', 'last_modified_user_id']) && attributesEqual(user.get('id'), report.getIn(['attributes', 'last_modified_user_id'])))
            ),
            dates,
            'due_date',
            'due_date_id'
          )
        ),
      'desc',
      'dueDateThenUpdated',
      'date'
    )
);

export const selectDueDates = createSelector(
  (state, id) => id,
  (state) => selectEntities(state, 'due_dates'),
  (id, dates) =>
    dates && sortEntities(
      dates.filter((date) =>
        attributesEqual(date.getIn(['attributes', 'indicator_id']), id)
        && !date.getIn(['attributes', 'has_progress_report'])
      ), 'asc', 'due_date', 'date'
    )
);
// without: {
//   path: 'progress_reports',
//   key: 'due_date_id',
// },
