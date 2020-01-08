import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubtitleSpan,
  TitleSpan
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer className={size || ''} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <TitleSpan>{title.toUpperCase()}</TitleSpan>
        <SubtitleSpan>SHOP NOW</SubtitleSpan>
      </ContentContainer>
    </MenuItemContainer>
  );
};

MenuItem.propType = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default withRouter(MenuItem);
