import React, { Component, PropTypes } from 'react';
import * as ActionTypes from '../../constants/ActionTypes';

import './index.css';
import Tabs from '../Tabs';
import Loading from '../Loading';
import About from '../About';
import Dialog from '../Dialog';
import Overlay from '../Overlay';
import Error from '../Error';
import Text from '../Text';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Body extends Component {
	constructor () {
		super(...arguments);

		this.state = { masked: false };
	}

	componentWillReceiveProps (nextProps) {
		let { masked } = nextProps.tabs;

		this.setState({ masked });
	}

	getComponent () {
		let { tabs, actions, type, config } = this.props;

		switch (type) {
			case ActionTypes.ITEMS_LOCKED:
				return <Loading tabs={ tabs } />;

			case ActionTypes.CLOSE_ALL_TABS:
			case ActionTypes.DISCARD_TABS:
				return <Dialog { ...this.props } />;

			case ActionTypes.SHOW_CREDENTIALS:
				return <About config={ config } />;

			case ActionTypes.SHOW_ERRORS:
				return <Error config={ config } />;

			case ActionTypes.SEARCH_TABS:
				if (!tabs.actual.length) {
					return <Text> { chrome.i18n.getMessage('nothing_found') } </Text>
				}

			default:
				let state = '';

				if (tabs.search.length > 0) {
					state = 'is-active';
				}
				else if (this.state.masked) {
					state = 'is-empty';
				}

				return <div>
							<Tabs items={ tabs.actual } tabs={ state } { ...this.props } />

							<Overlay state={ state }>
								<Tabs items={ tabs.search } state={ state }
								      { ...this.props }  />
							</Overlay>
						</div>;
		}
	}

	render () {
		const transition = 700;

		return <div className="tg-body">
					<ReactCSSTransitionGroup
						transitionName="tg-react"
						transitionAppear={ true }
						transitionAppearTimeout={ transition }
						transitionEnterTimeout={ transition }
						transitionLeaveTimeout={ transition }
					>
						{ this.getComponent() }
					</ReactCSSTransitionGroup>
				</div>;
	}
}

Body.propTypes = {
	tabs   : PropTypes.object.isRequired,
	type   : PropTypes.string.isRequired,
	config : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Body;
