import React, { Component, PropTypes } from 'react';
import './index.css';

let Disable = ({ state }) => {
	let className = 'tg-disable-box';

	if (state) {
		className += ' active';
	}

	return <div className={ className }> </div>;
}

Disable.propTypes = {
	state: PropTypes.bool.isRequired
};

export default Disable;
