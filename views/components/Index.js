import React, { Component, PropTypes } from 'react';

import List from './List';
import './Index.css';

export default class Index extends Component {
	constructor (properties) {
		super(properties);

		this.closeAllTabs = this.closeAllTabs.bind(this);
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	closeAllTabs (event) {
		let { items, actions } = this.props;

		actions.closeAllTabs(items);
		event.preventDefault();
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	openExtensions (event) {
		let { items, actions } = this.props;

		actions.closeAllTabs(items);
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
					<a className="tg-link tg-link_block" href="chrome://extensions" target="_blank">
						Open extensions
					</a>

					<a className="tg-link tg-link_block" href="#" onClick={ this.closeAllTabs }>
						Discard memory
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
