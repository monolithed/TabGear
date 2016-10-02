import React, { Component, PropTypes } from 'react';
import './index.css';

class Dialog extends Component {
	constructor (properties) {
		super(properties);

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
		return <div className="tg-box tg-dialog">
				<p className="tg-block">Are you sure you want to close all tabs?</p>

				<button className="tg-button" onClick={ this.closeAllTabs } autoFocus="autoFocus">Confirm</button>

				<p className="tg-block">
					<input type="checkbox" id="confirm" ref="ignore" onChange={ this.ignoreTabDialog } />
					<label htmlFor="confirm" className="tg-label">Prevent additional confirmation</label>
				</p>
			</div>;
	}
}

Dialog.propTypes = {};

export default Dialog;
