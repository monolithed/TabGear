import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';
import Tabs from '../Tabs';
import Loading from '../Loading';
import About from '../About';
import Dialog from '../Dialog';
import Error from '../Error';
import Text from '../Text';

class Body extends Component {
	getComponent () {
		let { store, actions, type } = this.props;

		switch (type) {
			case ActionTypes.SHOW_TABS:
			case ActionTypes.OPEN_EXTENSIONS:
				return <Tabs store={ store } actions={ actions } />;

			case ActionTypes.SEARCH_TABS:
				if (store.tabs.length) {
					return <Tabs store={ store } actions={ actions } />;
				}

				return <Text value="Nothing found..." />;

			case ActionTypes.ITEMS_LOCKED:
				return <Loading store={ store } />;

			case ActionTypes.SHOW_DIALOG:
				return <Dialog store={ store } actions={ actions } />;

			case ActionTypes.SHOW_CREDENTIALS:
				return <About />;

			default:
				return <Error />;
		}
	}

	render () {
		return <div className="tg-body"> { this.getComponent() } </div>;
	}
}

Body.propTypes = {
	store  : PropTypes.object.isRequired,
	type   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default Body;
