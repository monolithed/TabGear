import React, { Component, PropTypes } from 'react';

import './index.css';
import Title from './Title';
import Header from './Header';
import Search from './Search';
import Body from './Body';
import Footer from './Footer';
import * as SearchValues from '../constants/SearchValues';
import * as ActionTypes from '../constants/ActionTypes';

export default class Index extends Component {
	constructor (properties) {
		super(...arguments);
	}

	/**
	 *  Detects search bar
	 *  @returns {boolean}
	 */
	showSearch () {
		let { type, store } = this.props;
		let { SHOW_TABS, SEARCH_TABS } = ActionTypes;
		let { MIN_TABS_FOR_SEARCH } = SearchValues;

		return ![SHOW_TABS, SEARCH_TABS].includes(type) ||
			(type !== SEARCH_TABS && store.tabs.length <= MIN_TABS_FOR_SEARCH);
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

		let { type, store } = this.props;

		if (this.showSearch()) {
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
	type   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};
