import React, { Component, PropTypes } from 'react';

import List from './List';
import './Index.css';

export default class Index extends Component {
	constructor (properties) {
		super(properties);

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
		let { items, actions } = this.props;

		actions.discardTabs(items);
		event.preventDefault();
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	showCredentials (event) {
		let { actions } = this.props;

		actions.showCredentials();
		event.preventDefault();
	}

	/**
	 * Open browser extensions
	 *
	 * @param {Event} event
	 */
	openExtensions (event) {
		let { actions } = this.props;

		actions.openExtensions();
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

				<List items={ items } actions={ actions } />

				<div className="tg-footer">
					<a className="tg-link tg-link_block" href="#" onClick={ this.openExtensions }>
						Open extensions
					</a>

					<a className="tg-link tg-link_block" href="#" onClick={ this.discardTabs }>
						Discard tabs
					</a>

					<a className="tg-link tg-link_block" href="#" onClick={ this.showCredentials }>
						About
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
