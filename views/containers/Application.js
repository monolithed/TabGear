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

		let { tabs, actions } = this.props;

		actions.Tabs.showTabs(tabs.actual);
	}

	render () {
		return <Components { ...this.props } />;
	}
}

Application.propTypes = {
	notify : PropTypes.object,
	tabs   : PropTypes.object,
	type   : PropTypes.string,
	config : PropTypes.object,
	actions: PropTypes.object
};

let mapStateToProps = (state, properties) => {
	let {
		loadData     : actual,
		searchResults: search,
		isMasked     : masked,
		type,
		notify
	} = state;

	return {
		tabs: {
			actual,
			masked,
			search
		},

		notify,
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
