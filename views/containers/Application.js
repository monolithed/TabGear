import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Index from '../components/Index';
import actions from '../actions';

class Application extends Component {
	constructor (props) {
		super(props);

		this.props.actions.showTabs();
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

		return (
			<div>
				<Index items={ items } actions={ actions } />

				{ this.showErrors() }
			</div>
		);
	}
}

Application.propTypes = {
	items  : PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

let mapStateToProps = (state, properties) => {
	return { items: state.items };
};

let mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
