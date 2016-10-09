import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';
import Tabs from '../Tabs';
import Loading from '../Loading';
import About from '../About';
import Dialog from '../Dialog';
import Disable from '../Disable';
import Error from '../Error';
import Text from '../Text';

class Body extends Component {
	constructor () {
		super(...arguments);

		this.state = { disable: false };
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.value !== this.props.value) {
			let { disable } = nextProps.store;

			this.setState({ disable });
		}
	}

	getComponent () {
		let { store, actions, type } = this.props;

		switch (type) {
			case ActionTypes.ITEMS_LOCKED:
				return <Loading store={ store } />;

			case ActionTypes.SHOW_DIALOG:
				return <Dialog store={ store } actions={ actions } />;

			case ActionTypes.SHOW_CREDENTIALS:
				return <About />;

			case ActionTypes.SHOW_ERRORS:
				return <Error />;

			case ActionTypes.SEARCH_TABS:
				if (!store.tabs.length) {
					return <Text> { chrome.i18n.getMessage('Nothing found…') } </Text>
				}

			default:
				return <Tabs store={ store } actions={ actions } />;
		}
	}

	render () {
		return <div className="tg-body">
					{ this.getComponent() }
					<Disable state={ this.state.disable } />
				</div>;
	}
}

Body.propTypes = {
	store  : PropTypes.object.isRequired,
	type   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default Body;
