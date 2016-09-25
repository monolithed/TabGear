import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Index from '../components/Index';
import { items, open, close, reset } from '../actions';

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
		let { items, onOpen, onClose, onReset } = this.props;

		return (
			<div>
				<Index
					items={ items }
					onOpen={ onOpen }
					onClose={ onClose }
					onReset={ onReset }
				/>

				{ this.errors() }
			</div>
		);
	}
}

Application.propTypes = {
	// items  : PropTypes.array.required,
	// onOpen : PropTypes.func.required,
	// onReset: PropTypes.func.required,
	// onClose: PropTypes.func.required,
	// onLoad : PropTypes.func.required,
	// items  : PropTypes.func.required,
	// error  : PropTypes.string
}

let mapStateToProps = (state, properties) => {
	return { items: state.items };
};

let mapDispatchToProps = dispatch => {
	return {
		onLoad : bindActionCreators(items, dispatch),
		onOpen : bindActionCreators(open, dispatch),
		onClose: bindActionCreators(close, dispatch),
		onReset: bindActionCreators(reset, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
