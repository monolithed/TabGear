import React, { Component, PropTypes } from 'react';

import './index.css';
import * as ActionTypes from '../../constants/ActionTypes';
import Link from '../Link';

export default class Header extends Component {
	constructor (properties) {
		super(...arguments);

		this.closeAllTabs =
			this.closeAllTabs.bind(this);

		this.showTabs =
			this.showTabs.bind(this);
	}


	/**
	 * Get initial dialog state
	 *
	 * @type {boolean}
	 */
	get ignoreDialog () {
		let state = window.localStorage.getItem('tg-dialog');

		return JSON.parse(state);
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	closeAllTabs (event) {
		let { store, actions } = this.props;
		let { tabs } = store;

		if (this.ignoreDialog) {
			actions.Layout.closeAllTabs(tabs);
			actions.Tabs.showTabs(tabs);
		}
		else {
			actions.Layout.showDialog(tabs);
		}

		event.preventDefault();
	}

	/**
	 * Back to the tabs
	 *
	 * @param {Event} event
	 */
	showTabs (event) {
		let { store, actions } = this.props;

		actions.Tabs.showTabs(store.tabs);
		event.preventDefault();
	}

	/**
	 * Show the back link?
	 *
	 * @param {boolean}
	 */
	hasBack () {
		let types = [
			ActionTypes.SHOW_CREDENTIALS,
			ActionTypes.SHOW_DIALOG
		];

		return types.includes(this.props.type);
	}

	render () {
		let closeMods = ['block'];

		if (this.props.type === ActionTypes.SHOW_DIALOG) {
			closeMods.push('hide');
		}

		return <div className="tg-panel">
					<Link onClick={ this.showTabs } filter={ this.hasBack() } mods={[ 'back' ]}>
						{ chrome.i18n.getMessage('back') }
					</Link>

					<Link onClick={ this.closeAllTabs } mods={ closeMods }>
						{ chrome.i18n.getMessage('close_all_tabs') }
					</Link>
				</div>;
	}
}

Header.propTypes = {
	type   : PropTypes.string.isRequired,
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Header;
