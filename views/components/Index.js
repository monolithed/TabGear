import React, { Component, PropTypes } from 'react';

import Tabs from './Tabs';
import About from './About';
import Error from './Error';
import './index.css';

export default class Index extends Component {
	constructor (properties) {
		super(properties);

		this.state = { view: 'tabs' };

		this.openExtensions =
			this.openExtensions.bind(this);

		this.discardTabs =
			this.discardTabs.bind(this);

		this.showCredentials =
			this.showCredentials.bind(this);

		this.closeAllTabs =
			this.closeAllTabs.bind(this);
	}

	/**
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	closeAllTabs (event) {
		let { tabs, actions } = this.props;

		actions.Layout.closeAllTabs(tabs);
		event.preventDefault();
	}

	/**
	 * Discard all tabs
	 *
	 * @param {Event} event
	 */
	discardTabs (event) {
		let { tabs, actions } = this.props;

		actions.Layout.discardTabs(tabs);
		event.preventDefault();
	}

	/**
	 * Show credentials
	 *
	 * @param {Event} event
	 */
	showCredentials (event) {
		let { actions } = this.props;

		this.setState({ view: 'about' });

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

	getComponent () {
		let { tabs, actions, view } = this.props;

		switch (view) {
			case 'load':
			case 'tabs':
				return <Tabs tabs={ tabs } actions={ actions.Tabs } />;

			case 'about':
				return <About actions={ actions.About } />;

			default:
				return <Error actions={ actions.Error } />;
		}
	}

	render () {
		let { tabs, actions, view } = this.props;

		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { tabs.length } active tabs:
				</div>

				<div className="tg-header">
					<a className="tg-link" href="#" onClick={ this.closeAllTabs } tabIndex="-1">
						Close all tabs
					</a>
				</div>

				{ this.getComponent() }

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
	tabs  : PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};
