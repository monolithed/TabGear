import React, { Component, PropTypes } from 'react';

import './index.css';
import Title from './Title';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Index extends Component {
	constructor (properties) {
		super(properties);
	}

	/**
	 * Get children components
	 *
	 * @returns {Array<Component>}
	 */
	getComponents () {
		let components = [Title, Header, Body, Footer];

		return components.map((Component, key) => {
			return <Component { ...this.props } key={ key } />;
		});
	}

	render () {
		return <div className="tg-index"> { this.getComponents() } </div>;
	}
}

Index.propTypes = {
	store  : PropTypes.object.isRequired,
	view   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};
