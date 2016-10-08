import React, { Component, PropTypes } from 'react';
import './index.css';

class Search extends Component {
	constructor () {
		super(...arguments);

		this.searchTabs =
			this.searchTabs.bind(this);

		this.onFocus =
			this.onFocus.bind(this);

		this.onBlur =
			this.onBlur.bind(this);
	}

	onFocus (event) {
		let { actions, store } = this.props;

		actions.Tabs.disableTabs(store, true);
	}

	onBlur (event) {
		let { actions, store } = this.props;
		actions.Tabs.disableTabs(store, false);
	}

	searchTabs (event) {
		let { store, actions } = this.props;

		actions.Tabs.disableTabs(store, false);
		actions.Tabs.searchTabs(store.tabs, event.target.value);
		event.stopPropagation();
	}

	render () {
		return <div>
			<input className="tg-search" type="text"
			       placeholder={ chrome.i18n.getMessage('Search…') }
			       onFocus={ this.onFocus }
			       onBlur={ this.onBlur}
			       onInput={ this.searchTabs } />
		</div>;
	}
}

Search.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Search;
