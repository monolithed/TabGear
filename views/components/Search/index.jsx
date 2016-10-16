import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';
import BEMHelper from 'react-bem-helper';
import './index.css';

class Search extends Component {
	constructor () {
		super(...arguments);

		this.class = new BEMHelper({
			name: 'tg-search'
		});

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

		this.keepFocus =
			this.keepFocus.bind(this);
	}

	shouldComponentUpdate () {
		let types = [
			ActionTypes.DISABLE_TABS,
			ActionTypes.SEARCH_TABS
		];

		return types.includes(this.props.type);
	}

	componentDidMount () {
		document.addEventListener('keydown', this.keepFocus);
	}

	componentWillUnmount () {
		document.removeEventListener('keydown', this.keepFocus);
	}

	keepFocus (event) {
		console.log(event.keyCode)

		if (event.keyCode === 9) {
			event.preventDefault();
		}
	}

	onFocus (event) {
		let { actions, store } = this.props;

		let state = store.tabs.length != store.searchResults.length;

		actions.Tabs.disableTabs(store.tabs, state);
	}

	onBlur (event) {
		let { actions, store, type } = this.props;

		// searchTabs event should be called before.
		// Also we shouldn't care about "focusin" event
		if (!event.relatedTarget || event.relatedTarget.dataset.name !== 'tab') {
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
		console.log(1111)

		let { value } = this.state;

		let state = {
			extra: {
				'is-active': value.length > 0
			}
		};

		return <div { ...this.class(state) }>
					<input className="tg-search__input" type="text"
					       value={ value }
					       placeholder={ chrome.i18n.getMessage('search') }
					       onFocus={ this.onFocus }
					       onBlur={ this.onBlur}
					       onInput={ this.searchTabs } />

				<div className="tg-icon tg-search__clear" onClick={ this.clearSearch } />
			</div>;
	}
}

Search.propTypes = {
	store  : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Search;
