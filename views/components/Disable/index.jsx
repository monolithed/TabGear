import React, { Component, PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import './index.css';

let classes = new BEMHelper({
	name: 'tg-body'
});

let Disable = ({ state, children }) => {
	return <div>
				<div { ...classes(null, 'disable', state ? 'is-active' : 'is-inactive') } />
				<div className="tg-tabs__search-results"> { children } </div>
			</div>;
}

Disable.propTypes = {
	state   : PropTypes.any.isRequired,
	children: PropTypes.node
};

export default Disable;
