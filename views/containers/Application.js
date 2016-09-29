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

	showErrors () {
		let { error } = this.props;

		if (!error) {
			return null;
		}

		return (<b>{ error }</b>);
	}

	render () {
		let { items, actions } = this.props;
		// let actions = { Tabs, Index };

		return (
			<div>
				<Components items={ items } actions={ actions } />

				{ this.showErrors() }
			</div>
		);
	}
}

Application.propTypes = {
	items: PropTypes.array.isRequired
};

let mapStateToProps = (state, properties) => {
	let { items, about } = state;

	return {
		items,
		// about
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
