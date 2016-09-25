import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Index from '../components/Index';
import { items, onTab } from '../actions';

class Application extends Component {
	constructor (props) {
		super(props);

		this.props.onLoad();
	}

	errors () {
		let { error } = this.props;

		if (!error) {
			return null;
		}

		return (<b>{ error }</b>);
	}

	render () {
		let { items, onTab } = this.props;

		return (
			<div>
				<Index items={ items } onTab={ onTab } />
				{ this.errors() }
			</div>
		);
	}
}

Application.propTypes = {
	items: PropTypes.array.required,
	onTab: PropTypes.func.required,
	error: PropTypes.string
}

let mapStateToProps = (state, properties) => {
	return { items: state.items };
};

let mapDispatchToProps = dispatch => {
	return {
		onLoad: bindActionCreators(items, dispatch),
		onTab: bindActionCreators(onTab, dispatch),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
