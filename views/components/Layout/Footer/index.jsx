import React, { Component, PropTypes } from 'react';
import { bind } from 'decko';

import Link from '../../Link';

class Footer extends Component {
	constructor (properties) {
		super(...arguments);
	}

	/**
	 * Discard all tabs
	 *
	 * @param {Event} event
	 */
	@bind
	discardTabs (event) {
		let { tabs, actions } = this.props;

		actions.Layout.discardTabs(tabs.actual);
		event.preventDefault();
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	@bind
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
	@bind
	openExtensions (event) {
		let { actions } = this.props;

		actions.Layout.openExtensions();
		event.preventDefault();
	}

	/**
	 * Event filter
	 * @param {string} event
	 * @returns {boolean}
	 */
	filter (event) {
		switch (event) {
			case 'discard':
				try {
					return typeof chrome.tabs.discard !== 'undefined';
				}
				catch (error) {
					console.log('Could not find chrome.tabs.discard method');
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
						{ chrome.i18n.getMessage('discard') }
					</Link>
				</div>;
	}
}

Footer.propTypes = {
	tabs   : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Footer;
