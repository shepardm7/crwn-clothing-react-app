import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

// redux helpers
import { addItem } from '../../redux/cart/cart.actions';

import {
	AddButton,
	BackgroundImage,
	CollectionFooterContainer,
	CollectionItemContainer,
	NameContainer, PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => (
	<CollectionItemContainer>
		<BackgroundImage className="image" imageUrl={item.imageUrl}/>
		<CollectionFooterContainer>
			<NameContainer>{item.name}</NameContainer>
			<PriceContainer>{item.price}</PriceContainer>
		</CollectionFooterContainer>
		<AddButton inverted onClick={() => addItem(item)}>
			ADD TO CART
		</AddButton>
	</CollectionItemContainer>
);

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectionItem);
