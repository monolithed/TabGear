import React, { Component, PropTypes } from 'react';

import './index.css';
import Text from '../Text';

class Dialog extends Component {
	constructor (properties) {
		super(...arguments);

		this.closeAllTabs =
			this.closeAllTabs.bind(this);

		this.ignoreTabDialog =
			this.ignoreTabDialog.bind(this);
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	closeAllTabs (event) {
		let { store, actions } = this.props;

		actions.Layout.closeAllTabs(store.tabs);
		actions.Tabs.showTabs(store.tabs);

		event.preventDefault();
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	ignoreTabDialog (event) {
		window.localStorage.setItem('tg-dialog', event.target.checked);
	}

	render () {
		return <Text className="tg-dialog">
				<p className="tg-block">Are you sure you want to close all tabs?</p>

				<button className="tg-button" onClick={ this.closeAllTabs } autoFocus="autoFocus">Confirm</button>

				<p className="tg-block">
					<input type="checkbox" id="confirm" ref="ignore" onChange={ this.ignoreTabDialog } />
					<label htmlFor="confirm" className="tg-label">Prevent additional confirmation</label>
				</p>
			</Text>;
	}
}

Dialog.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Dialog;
