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
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Body extends Component {
	constructor () {
		super(...arguments);

		this.state = { disable: false };
	}

	componentWillReceiveProps (nextProps) {
		let { disable } = nextProps.store;

		this.setState({ disable: disable });
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
					return <Text> { chrome.i18n.getMessage('nothing_found') } </Text>
				}

			default:
				let { disable } = this.state;
				let state = '';

				if (store.searchResults.length > 0) {
					state = 'is-active';
				}
				else if (disable) {
					state = 'is-empty';
				}

				return <div>
							<Tabs items={ store.tabs } { ...this.props } />

							<Disable state={ disable }>
								<Tabs items={ store.searchResults } { ...this.props }  />
							</Disable>
						</div>

		}
	}

	render () {
		let { store, actions } = this.props;

		const timeout = 700;

		return <div className="tg-body">
					<ReactCSSTransitionGroup
						transitionName="tg-react"
						transitionAppear={true}
						transitionAppearTimeout={ timeout }
						transitionEnterTimeout={ timeout }
						transitionLeaveTimeout={ timeout }
					>
						{ this.getComponent() }
					</ReactCSSTransitionGroup>
				</div>;
	}
}

Body.propTypes = {
	store  : PropTypes.object.isRequired,
	type   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default Body;
