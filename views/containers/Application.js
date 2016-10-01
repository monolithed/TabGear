import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Components from '../components/Index';
import * as Actions from '../actions';

window.localStorage.debug = 'tg:*';

class Application extends Component {
	constructor (props) {
		super(props);

		this.props.actions.Tabs.showTabs();
	}

	render () {
		let { store, actions, view } = this.props;

		return <Components store={ store } view={ view } actions={ actions } />;
	}
}

Application.propTypes = {
	store: PropTypes.object.isRequired
};

let mapStateToProps = (state, properties) => {
	let { loadData: tabs, view } = state;

	return { store: { tabs }, view };
};

let mapDispatchToProps = dispatch => {
	let actions = {};

	for (let name of Object.keys(Actions)) {
		actions[name] = bindActionCreators(Actions[name], dispatch);
	}

	return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
