import React, { Component, PropTypes } from 'react';

import './index.css';
import Title from './Title';
import Header from './Header';
import Search from './Search';
import Body from './Body';
import Footer from './Footer';
import * as SearchValues from '../constants/SearchValues';

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
		let components = [
			Title,
			Header,
			Search,
			Body,
			Footer
		];

		let { view, store } = this.props;

		if (view !== 'Tabs' || store.tabs.length <= SearchValues.MIN_TABS_FOR_SEARCH) {
			components.splice(2, 1);
		}

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
