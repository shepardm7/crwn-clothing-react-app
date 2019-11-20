import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  console.log(history);
  console.log(match);
  return (
    <div className={`${size || ''} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl}` }} />
      <div className="content">
        <span className="title">{title.toUpperCase()}</span>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propType = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default withRouter(MenuItem);
