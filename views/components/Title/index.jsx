import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';

export default class Title extends Component {
	getTitle (type, store) {
		switch (type) {
			case ActionTypes.SHOW_CREDENTIALS:
				return chrome.i18n.getMessage('about');

			case ActionTypes.SHOW_ERRORS:
				return chrome.i18n.getMessage('error');

			case ActionTypes.SHOW_DIALOG:
				return chrome.i18n.getMessage('warning');

			case ActionTypes.ITEMS_LOCKED:
				return chrome.i18n.getMessage('loading');

			default:
				let { length } = store.tabs;
				let plural = length !== 1 ? 's' : '';

				return chrome.i18n.getMessage(`active_tab${ plural }`, [ length ]) ;
		}
	}

	render () {
		let { store, type } = this.props;

		return <div className="tg-title"> Tab Gear: { this.getTitle(type, store) }</div>;
	}
}

Title.propTypes = {
	store: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

export default Title;
