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
	hasSearch () {
		let { type, tabs } = this.props;

		switch (type) {
			case ActionTypes.SHOW_CREDENTIALS:
			case ActionTypes.SHOW_DIALOG:
			case ActionTypes.SHOW_ERRORS:
			case ActionTypes.ITEMS_LOCKED:
				return false;

			default:
				if (type !== ActionTypes.SEARCH_TABS &&  tabs.actual.length <= SearchValues.MIN_TABS_FOR_SEARCH) {
					return false;
				}
		}

		return true;
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
			Body,
			Footer
		];

		if (this.hasSearch()) {
			components.splice(2, 0, Search);
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
	tabs   : PropTypes.object.isRequired,
	type   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};
