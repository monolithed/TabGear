import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Components from '../components/Index';
import * as Actions from '../actions';

window.localStorage.debug = 'tg:*';

class Application extends Component {
	constructor (properties) {
		super(...arguments);

		let { store, actions } = this.props;

		actions.Tabs.showTabs(store.tabs);
	}

	render () {
		let { store, actions, type } = this.props;

		return <Components store={ store } type={ type } actions={ actions } />;
	}
}

Application.propTypes = {
	store  : PropTypes.object,
	type   : PropTypes.string,
	actions: PropTypes.object
};

let mapStateToProps = (state, properties) => {
	let {
		loadData: tabs,
		searchData: search,
		type
	} = state;

	return { store: { tabs, search }, type };
};

let mapDispatchToProps = dispatch => {
	let actions = {};

	for (let name of Object.keys(Actions)) {
		actions[name] = bindActionCreators(Actions[name], dispatch);
	}

	return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
