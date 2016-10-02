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
	 * Close all tabs
	 *
	 * @param {Event} event
	 */
	closeAllTabs (event) {
		let { store, actions } = this.props;

		actions.Layout.closeAllTabs(store.tabs);
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

	render () {
		return <div className="tg-panel">
					<Link onClick={ this.showTabs } text="Back" mods={[ 'back' ]} />
					<Link onClick={ this.closeAllTabs } text="Close all tabs" mods={[ 'block' ]} tabIndex="-1" />
				</div>;
	}
}

Header.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Header;
