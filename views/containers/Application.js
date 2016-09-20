import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Index from '../components/Index';
import { error } from '../actions';

class Application extends Component {
	constructor (props) {
		super(props)
	}

	renderErrorMessage () {
		const { error } = this.props;

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
				{ this.renderErrorMessage() }
			</div>
		)
	}
}

Application.propTypes = {
	error: PropTypes.string
}

let errors = ({ error }, properties) => {
	return { error };
};

export default connect(errors, { error })(Application);
