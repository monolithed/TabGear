import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';

export default class Title extends Component {
	getTitle (type, store) {
		switch (type) {
			case ActionTypes.SHOW_CREDENTIALS:
				return chrome.i18n.getMessages('About');

			case ActionTypes.SHOW_ERRORS:
				return chrome.i18n.getMessages('Error');

			case ActionTypes.SHOW_DIALOG:
				return chrome.i18n.getMessages('Warning');

			case ActionTypes.ITEMS_LOCKED:
				return chrome.i18n.getMessages('Loading...');

			default:
				return `${store.tabs.length} active tabs`;
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
