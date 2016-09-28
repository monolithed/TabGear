import React, { Component, PropTypes } from 'react';

import Tabs from './Tabs';
import './index.css';

export default class Index extends Component {
	constructor (properties) {
		super(properties);

		this.openExtensions =
			this.openExtensions.bind(this);

		this.discardTabs =
			this.discardTabs.bind(this);

		this.showCredentials =
			this.showCredentials.bind(this);

		this.closeAllTabs =
			this.showCredentials.bind(this);
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	closeAllTabs (event) {
		let { items, actions } = this.props;

		actions.Index.closeAllTabs(items);
		event.preventDefault();
	}

	/**
	 * Discard all tabs
	 *
	 * @param {Event} event
	 */
	discardTabs (event) {
		let { items, actions } = this.props;

		actions.Index.discardTabs(items);
		event.preventDefault();
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	showCredentials (event) {
		let { actions } = this.props;

		actions.Index.showCredentials();
		event.preventDefault();
	}

	/**
	 * Open browser extensions
	 *
	 * @param {Event} event
	 */
	openExtensions (event) {
		let { actions } = this.props;

		actions.Index.openExtensions();
		event.preventDefault();
	}

	render () {
		let { items, actions } = this.props;

		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { items.length } active tabs:
				</div>

				<div className="tg-header">
					<a className="tg-link" href="#" onClick={ this.closeAllTabs } tabIndex="-1">
						Close all tabs
					</a>
				</div>

				<Tabs items={ items } actions={ actions.Tabs } />

				<div className="tg-footer">
					<a className="tg-link tg-link_block" href="#" onClick={ this.showCredentials }>
						About
					</a>

					<a className="tg-link tg-link_block" href="#" onClick={ this.openExtensions }>
						Open extensions
					</a>

					<a className="tg-link tg-link_block" href="#" onClick={ this.discardTabs }>
						Discard tabs
					</a>
				</div>
			</div>
		);
	}
}

Index.propTypes = {
	items  : PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};
