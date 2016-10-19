import React, { Component, PropTypes } from 'react';

import './index.css';
import Text from '../../Text';

class Discard extends Component {
	constructor (properties) {
		super(...arguments);

		this.showTabs =
			this.showTabs.bind(this);
	}

	/**
	 * Show tabs
	 *
	 * @param {Event} event
	 */
	showTabs (event) {
		let { tabs, actions } = this.props;
		let { actual } = tabs;

		actions.Tabs.showTabs(actual);

		event.preventDefault();
	}

	render () {
		return <Text className="tg-dialog">
				<p className="tg-block">
					{ chrome.i18n.getMessage('discarded') }
				</p>

				<p className="tg-block">
					<button className="tg-button" onClick={ this.showTabs } autoFocus="autoFocus">
						{ chrome.i18n.getMessage('proceed') }
					</button>
				</p>
			</Text>;
	}
}

Discard.propTypes = {
	tabs   : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Discard;
