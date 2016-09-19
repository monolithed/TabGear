import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Index from '../components/Index'
import { resetErrorMessage } from '../actions'

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
	error: PropTypes.string,
	resetErrorMessage: PropTypes.func.isRequired
}

function mapStateToProps (state, ownProps) {
	return {
		error: state.error,
		inputValue  : ownProps.location.pathname.substring(1)
	}
}

export default connect(mapStateToProps, { resetErrorMessage })(Application);
