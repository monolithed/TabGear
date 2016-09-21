import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Index from './Index';
// import { items } from '../actions';

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
		let { total = 0 } = this.props;

		return (
			<div>
				<Index total={ total } />
				{ this.errors() }
			</div>
		)
	}
}

Application.propTypes = {
	total: PropTypes.number
	// error: PropTypes.string
}

let items = (state, properties) => {
	debugger
	return { items: state.items };
};

export default connect(items)(Application);
