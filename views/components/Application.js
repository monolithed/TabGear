import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Index from './Index';
import { errors } from '../actions';

class Application extends Component {
	constructor (props) {
		super(props)
	}

	errors () {
		let { error } = this.props;

		if (!error) {
			return null;
		}

		return (<b>{ error }</b>);
	}

	render () {
		let { total = 0, items, errorAction } = this.props;

		return (
			<div>
				<Index total={ total } items={ items } />
				{ this.errors() }
				<button onClick={ errorAction }>reset</button>
			</div>
		)
	}
}

Application.propTypes = {
	total: PropTypes.number,
	items: PropTypes.object,
	error: PropTypes.func
}

let mapStateToProps = (state, properties) => {
	return { items: state.items };
};

let mapDispatchToProps = dispatch => {
	return {
		errorAction: bindActionCreators(errors, dispatch),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Application);
