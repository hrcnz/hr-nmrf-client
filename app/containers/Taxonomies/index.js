/*
 *
 * Taxonomies
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// containers
import { loadEntitiesIfNeeded } from 'containers/App/actions';
import {
  getEntities,
  isReady,
} from 'containers/App/selectors';

// components
import Page from 'components/Page';
import TaxonomyList from 'components/TaxonomyList';

// relative
import messages from './messages';

export class Taxonomies extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.loadEntitiesIfNeeded();
  }
  componentWillReceiveProps(nextProps) {
    // reload entities if invalidated
    if (!nextProps.dataReady) {
      this.props.loadEntitiesIfNeeded();
    }
  }

  mapToTaxonomyList = (taxonomies) => Object.values(taxonomies).map((tax) => ({
    id: tax.id,
    title: tax.attributes.title,
    count: tax.count,
    linkTo: `/categories/${tax.id}`,
    tags: {
      recommendations: !!tax.attributes.tags_recommendations,
      actions: !!tax.attributes.tags_measures,
      users: !!tax.attributes.tags_users,
    },
  }))

  render() {
    const { dataReady } = this.props;

    return (
      <div>
        <Helmet
          title={`${this.context.intl.formatMessage(messages.pageTitle)}`}
          meta={[
            { name: 'description', content: this.context.intl.formatMessage(messages.metaDescription) },
          ]}
        />
        <Page
          title={this.context.intl.formatMessage(messages.pageTitle)}
        >
          { !dataReady &&
            <div>
              <FormattedMessage {...messages.loading} />
            </div>
          }
          { dataReady &&
            <TaxonomyList
              taxonomies={this.mapToTaxonomyList(this.props.taxonomies)}
            />
          }
        </Page>
      </div>
    );
  }
}

Taxonomies.propTypes = {
  loadEntitiesIfNeeded: PropTypes.func,
  taxonomies: PropTypes.object,
  dataReady: PropTypes.bool,
};

Taxonomies.contextTypes = {
  intl: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  dataReady: isReady(state, { path: [
    'categories',
    'taxonomies',
    // 'recommendation_categories',
    // 'measure_categories',
  ] }),
  taxonomies: getEntities(
    state,
    {
      path: 'taxonomies',
      extend: {
        type: 'count',
        path: 'categories',
        key: 'taxonomy_id',
        reverse: true,
        as: 'count',
      },
      out: 'js',
    },
  ),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEntitiesIfNeeded: () => {
      dispatch(loadEntitiesIfNeeded('categories'));
      dispatch(loadEntitiesIfNeeded('taxonomies'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Taxonomies);