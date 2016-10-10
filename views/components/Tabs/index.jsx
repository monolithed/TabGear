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
		let { actions } = this.props;

		actions.Tabs.switchTab(index);
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
	 * Loads data
	 *
	 * @param {string} name
	 */
	showTabs (name) {
		let { tabs } = this.props;

		return tabs.map((tab, key) => {
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
						   data-index={ index }
						   href="#"
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
		let className = `tg-tabs ${this.props.state}`;

		return <ul className={ className }>
					{ this.showTabs('tg-tabs__item') }
				</ul>;
	}
}

Tabs.propTypes = {
	tabs   : PropTypes.array.isRequired,
	state  : PropTypes.string,
	actions: PropTypes.object.isRequired
};

export default Tabs;
