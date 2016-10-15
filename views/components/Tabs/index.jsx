import React, { Component, PropTypes } from 'react';
import './index.css';

class Tabs extends Component {
	constructor (properties) {
		super(...arguments);

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
		let { actions, store } = this.props;

		actions.Tabs.switchTab(index);
		actions.Tabs.disableTabs(store.tabs, false);

		event.stopPropagation()
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

		event.stopPropagation()
		event.preventDefault();
	}

	/**
	 * Get tabs
	 *
	 * @param {string} name
	 */
	getItems (name) {
		let { items } = this.props;

		return items.map((tab, key) => {
			let { id, index, title, incognito, favIconUrl, highlighted } = tab;

			let state = [name];

			if (incognito) {
				state.push('incognito');
			}

			if (highlighted) {
				state.push('highlighted');
			}

			state = state.join(` ${name}-state_`);

			return <li className={ state } key={ key }>
						<a className={ `${name}-link` }
						   href="#"
						   data-index={ index }
						   data-name="tab"
						   onClick={ this.switchTab }>

							<img className={ `${name}-icon` }
							     src={ favIconUrl } alt="" />

							<span className={ `${name}-text` }> { title } </span>

							<span className={ `tg-icon ${name}-close` }
							      data-id={ id }
							      title={ chrome.i18n.getMessage('close') }
							      onClick={ this.closeTab }> </span>
						</a>
					</li>;
		});
	}

	render () {
		let className = `tg-tabs ${this.props.state || ''}`;

		return <ul className={ className }>
					{ this.getItems('tg-tabs__item') }
				</ul>;
	}
}

Tabs.propTypes = {
	items  : PropTypes.array.isRequired,
	store  : PropTypes.object.isRequired,
	state  : PropTypes.string,
	actions: PropTypes.object.isRequired
};

export default Tabs;
