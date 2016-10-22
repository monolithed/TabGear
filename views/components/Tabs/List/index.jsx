import React, { Component, PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import './index.css';

class Tabs extends Component {
	constructor (properties) {
		super(...arguments);

		this.class = new BEMHelper({
			name: 'tg-tabs'
		});

		this.switchTab =
			this.switchTab.bind(this);

		this.closeTab =
			this.closeTab.bind(this);
	}

	/**
	 * Highlights the given tabs
	 *
	 * @param {Event} event
	 */
	switchTab (event) {
		let { index } = event.currentTarget.dataset;
		let { actions, tabs } = this.props;

		actions.Tabs.switchTab(index);
		actions.Tabs.maskTabs(tabs.actual, false);

		event.stopPropagation();
		event.preventDefault();
	}

	/**
	 * Closes selected tab
	 *
	 * @param {Event} event
	 */
	closeTab (event) {
		let { id } = event.currentTarget.dataset;
		let { actions } = this.props;

		actions.Tabs.closeTab(id);

		event.stopPropagation();
		event.preventDefault();
	}

	/**
	 * Get tabs
	 *
	 * @param {string} name
	 * @returns {JSX}
	 */
	getItems (name) {
		let { items } = this.props;

		return items.map((tab, key) => {
			let { id, index, title, incognito, favIconUrl, highlighted } = tab;

			let state = [];

			if (incognito) {
				state.push('incognito');
			}

			if (highlighted) {
				state.push('highlighted');
			}

			return <li { ...this.class('item', state) } key={ key }>
						<a { ...this.class('item-link') } href="#"
						   data-index={ index }
						   data-name="tab"
						   onClick={ this.switchTab }>

							<img { ...this.class('item-icon') } src={ favIconUrl } />

							<span { ...this.class('item-text') }> { title } </span>

							<span { ...this.class('item-close', null, 'tg-icon') }
							      data-id={ id }
							      title={ chrome.i18n.getMessage('close') }
							      onClick={ this.closeTab } />
						</a>
					</li>;
		});
	}

	render () {
		return <ul { ...this.class({ extra: this.props.state }) }>
					{ this.getItems('tg-tabs__item') }
				</ul>;
	}
}

Tabs.propTypes = {
	items  : PropTypes.array.isRequired,
	tabs   : PropTypes.object.isRequired,
	state  : PropTypes.string,
	actions: PropTypes.object.isRequired
};

export default Tabs;
