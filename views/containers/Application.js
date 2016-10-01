import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Components from '../components/Index';
import * as Actions from '../actions';

class Application extends Component {
	constructor (props) {
		super(props);

		this.props.actions.Tabs.showTabs();
	}

	render () {
		let { tabs, actions, view } = this.props;

		return <Components tabs={ tabs } view={ view } actions={ actions } />;
	}
}

Application.propTypes = {
	tabs: PropTypes.array.isRequired
};

let mapStateToProps = (state, properties) => {
	let { loadData: tabs, view } = state;

	return { tabs, view };
};

let mapDispatchToProps = dispatch => {
	let actions = {};

	for (let name of Object.keys(Actions)) {
		actions[name] = bindActionCreators(Actions[name], dispatch);
	}

	return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
