import React, { Component, PropTypes } from 'react';
import './index.css';

let Disable = ({ state, children }) => {
	let className = 'tg-disable-box';

	if (state) {
		className += ' is-active';
	}

	return <div>
				<div className={ className }> </div>
				<div className="tg-tabs__search-results">
					{ children }
				</div>
			</div>;
}

Disable.propTypes = {
	state   : PropTypes.bool.isRequired,
	children: PropTypes.node
};

export default Disable;
