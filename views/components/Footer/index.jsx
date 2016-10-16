import React, { Component, PropTypes } from 'react';
import debug from 'debug';

import './index.css';
import Link from '../Link';

export default class Footer extends Component {
	constructor (properties) {
		super(...arguments);

		this.openExtensions =
			this.openExtensions.bind(this);

		this.discardTabs =
			this.discardTabs.bind(this);

		this.showCredentials =
			this.showCredentials.bind(this);
	}

	/**
	 * Discard all tabs
	 *
	 * @param {Event} event
	 */
	discardTabs (event) {
		let { store, actions } = this.props;

		actions.Layout.discardTabs(store.tabs);
		event.preventDefault();
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	showCredentials (event) {
		let { actions } = this.props;

		actions.Layout.showCredentials();
		event.preventDefault();
	}

	/**
	 * Open browser extensions
	 *
	 * @param {Event} event
	 */
	openExtensions (event) {
		let { actions } = this.props;

		actions.Layout.openExtensions();
		event.preventDefault();
	}

	/**
	 * Event filter
	 * @param {string} event
	 */
	filter (event) {
		switch (event) {
			case 'discard':
				try {
					return typeof chrome.tabs.discard !== 'undefined';
				}
				catch (error) {
					debug('tg:error')('Could not find chrome.tabs.discard method');
				}

			default:
				return false;
		}
	}

	render () {
		return <div className="tg-panel">
					<Link onClick={ this.showCredentials }>
						{ chrome.i18n.getMessage('show_credentials') }
					</Link>

					<Link onClick={ this.openExtensions } mods={[ 'block' ]}>
						{ chrome.i18n.getMessage('open_extensions') }
					</Link>

					<Link onClick={ this.discardTabs } filter={
						this.filter('discard') } mods={[ 'block' ]}>
						{ chrome.i18n.getMessage('discard_tabs') }
					</Link>
				</div>;
	}
}

Footer.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Footer;
