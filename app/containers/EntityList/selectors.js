import { createSelector } from 'reselect';
import { REDUCER_PATH } from './constants';

/**
 * Direct selector to the actionEdit state domain
 */
const selectEntityListDomain = (state) => state.get(REDUCER_PATH);

/**
 * Other specific selectors
 */

const pageSelector = createSelector(
   selectEntityListDomain,
   (substate) => substate.get('page')
);

const filterFormSelector = createSelector(
  selectEntityListDomain,
  (substate) => substate.get('filterForm').data // TODO WTF HTF GRR
);

const editFormSelector = createSelector(
  selectEntityListDomain,
  (substate) => substate.get('editForm').data // TODO WTF HTF GRR
);

const listingsFormSelector = createSelector(
  selectEntityListDomain,
  (substate) => substate.get('listingsForm').data // TODO WTF HTF GRR
);

// TODO enable better caching on this, it's expensive ish
const entitiesSelectedSelector = createSelector(
    listingsFormSelector,
    (form) => form.get('entities').reduce((selected, entity, id) => entity.get('selected') ? selected.concat(id) : selected, [])
);

const activeFilterOptionSelector = createSelector(
  pageSelector,
  (pageState) => pageState.get('activeFilterOption')
);

const activeEditOptionSelector = createSelector(
  pageSelector,
  (pageState) => pageState.get('activeEditOption')
);

const activePanelSelector = createSelector(
  pageSelector,
  (pageState) => pageState.get('activePanel')
);

const filtersCheckedSelector = createSelector(
  filterFormSelector,
  // () => window.location.href,
  // (formData, href) => {
  (formData) => {
    const values = formData.get('values').filter((value) => value.get('checked'));
    // might want some intesection logic here, as this is going to replace all existing params ( but maybe that's ok )
    // some way to remove all the existing params that we are using before appending
    // SEE https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    // const url = new URL(href);
    return values.reduce((URLParams, value) => {
      URLParams.append(value.get('query'), value.get('value'));
      return URLParams;
    }, new URLSearchParams());
    // }, new URLSearchParams(url.search));
  }
);

/**
 * Default selector used by ActionEdit
 */

const entityListSelect = createSelector(
  selectEntityListDomain,
  (substate) => substate.toJS()
);

export default entityListSelect;
export {
  selectEntityListDomain,
  entityListSelect,
  editFormSelector,
  filterFormSelector,
  activeFilterOptionSelector,
  activeEditOptionSelector,
  filtersCheckedSelector,
  activePanelSelector,
  listingsFormSelector,
  entitiesSelectedSelector,
};