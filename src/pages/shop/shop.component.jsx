import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as PropTypes from 'prop-types';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

class ShopPage extends React.Component {

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
			</div>
		);
	}
}

ShopPage.propTypes = { match: PropTypes.any };

const mapDispatchToProps = {
	fetchCollectionsStartAsync: fetchCollectionsStartAsync
};

export default connect(
	null,
	mapDispatchToProps
)(ShopPage);
