import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Components from '../components/Index';
import { Tabs, Index } from '../actions';

class Application extends Component {
	constructor (props) {
		super(props);

		this.props.Tabs.showTabs();
	}

	showErrors () {
		let { error } = this.props;

		if (!error) {
			return null;
		}

		return (<b>{ error }</b>);
	}

	render () {
		let { items, Tabs, Index } = this.props;
		let actions = { Tabs, Index };

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
	return {
		Index: bindActionCreators(Index, dispatch),
		Tabs: bindActionCreators(Tabs, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
