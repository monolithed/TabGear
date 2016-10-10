import React, { Component, PropTypes } from 'react';
import './index.css';

class Search extends Component {
	constructor () {
		super(...arguments);

		this.state = {
			value: ''
		};

		this.searchTabs =
			this.searchTabs.bind(this);

		this.clearSearch =
			this.clearSearch.bind(this);

		this.onFocus =
			this.onFocus.bind(this);

		this.onBlur =
			this.onBlur.bind(this);
	}

	onFocus (event) {
		let { actions, store } = this.props;

		let state = store.tabs.length != store.searchResults.length;

		actions.Tabs.disableTabs(store, state);
	}

	onBlur (event) {
		let { actions, store } = this.props;

		actions.Tabs.disableTabs(store, false);
	}

	clearSearch (event) {
		let { store, actions } = this.props;

		actions.Tabs.searchTabs(store.tabs);
		this.setState({ value: '' });
	}

	searchTabs (event) {
		let { store, actions } = this.props;
		let { value } = event.target;

		actions.Tabs.searchTabs(store.tabs, value);
		this.setState({ value});

		event.stopPropagation();
	}

	render () {
		let clear = 'tg-icon tg-search__clear';
		let { value } = this.state;

		if (value.length > 0) {
			clear += ' is-active'
		}

		return <div className="tg-search">
					<input className="tg-search__input" type="text"
					       value={ value }
					       placeholder={ chrome.i18n.getMessage('search') }
					       onFocus={ this.onFocus }
					       onBlur={ this.onBlur}
					       onInput={ this.searchTabs } />

				<div className={ clear } onClick={ this.clearSearch }> </div>
			</div>;
	}
}

Search.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Search;
