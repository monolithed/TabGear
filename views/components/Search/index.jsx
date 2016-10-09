import React, { Component, PropTypes } from 'react';
import './index.css';

class Search extends Component {
	constructor () {
		super(...arguments);

		this.state = {
			clear: false,
			value: '',
			active: false
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

		actions.Tabs.disableTabs(store, true);
		this.setState({ clear: true });
	}

	onBlur (event) {
		let { actions, store } = this.props;

		actions.Tabs.disableTabs(store, false);
		this.setState({ clear: false });
	}

	clearSearch (event) {
		this.setState({ value: '' });
	}

	searchTabs (event) {
		let { store, actions } = this.props;
		let { value } = event.target;

		actions.Tabs.disableTabs(store, false);
		actions.Tabs.searchTabs(store.tabs, value);
		this.setState({ value});

		event.stopPropagation();
	}

	render () {
		let clear = 'tg-search__clear';

		if (this.state.clear) {
			clear += ' tg-search__clear_active'
		}

		return <div className="tg-search">
					<input className="tg-search__input" type="text"
					       value={ this.state.value }
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
