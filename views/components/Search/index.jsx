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

		actions.Search.searchTabs(store.tabs, event.target.value);
		actions.Tabs.showTabs(store.search);
	}

	render () {
		return <div>
			<input className="tg-search" type="text" placeholder="Search..."
			       autoFocus="autoFocus" onInput={ this.searchTabs } />
		</div>;
	}
}

Search.propTypes = {};

export default Search;
