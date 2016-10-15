import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';
import './index.css';

class Search extends Component {
	constructor () {
		super(...arguments);

		this.state = {
			value: '',
			switchTab: false
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

		actions.Tabs.disableTabs(store.tabs, state);
	}

	onBlur ({ relatedTarget }) {
		let { actions, store, type } = this.props;

		// searchTabs event should be called before
		if (!relatedTarget || relatedTarget.dataset.name !== 'tab') {
			actions.Tabs.disableTabs(store.tabs, false);
		}
	}

	clearSearch (event) {
		let { store, actions } = this.props;

		actions.Tabs.searchTabs(store.tabs);
		this.setState({ value: '' });
	}

	searchTabs (event) {
		let { store, actions } = this.props;
		let { value } = event.target;

		this.setState({ value});

		actions.Tabs.searchTabs(store.tabs, value);
		event.stopPropagation();
	}

	render () {
		let className = 'tg-search';
		let { value } = this.state;

		if (value.length > 0) {
			className += ' is-active';
		}

		return <div className={ className }>
					<input className="tg-search__input" type="text"
					       value={ value }
					       placeholder={ chrome.i18n.getMessage('search') }
					       onFocus={ this.onFocus }
					       onBlur={ this.onBlur}
					       onInput={ this.searchTabs } />

				<div className="tg-icon tg-search__clear" onClick={ this.clearSearch }> </div>
			</div>;
	}
}

Search.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Search;
