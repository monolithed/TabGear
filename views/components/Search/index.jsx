import React, { Component, PropTypes } from 'react';
import './index.css';

class Search extends Component {
	constructor () {
		super(...arguments);

		this.searchTabs =
			this.searchTabs.bind(this);
	}

	searchTabs (event) {
		let { store, actions } = this.props;

		actions.Tabs.searchTabs(store.tabs, event.target.value);
	}

	render () {
		return <div>
			<input className="tg-search" type="text" placeholder={ chrome.i18n.getMessage('Search…') }
			       autoFocus="autoFocus" onInput={ this.searchTabs } />
		</div>;
	}
}

Search.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Search;
