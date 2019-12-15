import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
	const getClass = () => {
		let btnClass = 'custom-button';
		if (isGoogleSignIn) btnClass += ' google-sign-in';
		if (inverted) btnClass += ' inverted';
		return btnClass;
	};
	return (
		// eslint-disable-next-line react/button-has-type
		<button className={getClass()} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
