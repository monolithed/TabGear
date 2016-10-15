import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';

export default class Title extends Component {
	constructor (properties) {
		super(...arguments);

		this.state = {
			credentials: false
		}

		this.showCredentials =
			this.showCredentials.bind(this);
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	showCredentials (event) {
		let { actions, type } = this.props;

		let types = [
			ActionTypes.SHOW_TABS,
			ActionTypes.DISABLE_TABS
		];

		let active = types.includes(type);

		if (active) {
			actions.Layout.showCredentials();
		}
		else {
			actions.Tabs.showTabs();
		}

		this.setState({ credentials: active });

		event.preventDefault();
	}

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

		return <div className="tg-title">
					Tab Gear: { this.getTitle(type, store) }
					<div className="tg-icon tg-controls__more"
				        onClick={ this.showCredentials }>more_vert</div>
				</div>;
	}
}

Title.propTypes = {
	store: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

export default Title;
