import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';

export default class Header extends Component {
	constructor (properties) {
		super(properties);

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
	showBack () {
		return /^(About|Dialog)$/.test(this.props.view);
	}

	render () {
		return <div className="tg-panel">
					<Link onClick={ this.showTabs }
					      text="Back" filter={ this.showBack() } mods={[ 'back' ]} />

					<Link onClick={ this.closeAllTabs }
					      text="Close all tabs" mods={[ 'block' ]} />
				</div>;
	}
}

Header.propTypes = {
	view   : PropTypes.string.isRequired,
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Header;
