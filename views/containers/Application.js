import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Components from '../components/Index';
import config from '../../config';
import * as Actions from '../actions';

window.localStorage.debug = 'tg:*';

class Application extends Component {
	constructor (properties) {
		super(...arguments);

		let { store, actions } = this.props;

		actions.Tabs.showTabs(store.tabs);
	}

	render () {
		return <Components { ...this.props } />;
	}
}

Application.propTypes = {
	store  : PropTypes.object,
	type   : PropTypes.string,
	config : PropTypes.object,
	actions: PropTypes.object
};

let mapStateToProps = (state, properties) => {
	let { loadData: tabs, type, disable, searchResults } = state;

	return {
		store: {
			tabs,
			disable,
			searchResults
		},

		config,
		type
	};
};

let mapDispatchToProps = dispatch => {
	let actions = {};

	for (let name of Object.keys(Actions)) {
		actions[name] = bindActionCreators(Actions[name], dispatch);
	}

	return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
