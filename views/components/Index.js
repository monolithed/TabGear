import React, { Component, PropTypes } from 'react';

import List from './List';
import './Index.css';

export default class Index extends Component {
	constructor (properties) {
		super(properties);

		this.reset = this.reset.bind(this);
	}

	reset (event) {
		let { items, actions } = this.props;

		actions.reset(items);
		event.preventDefault();
	}

	render () {
		let { items, actions } = this.props;

		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { items.length } active tabs:
				</div>

				<div className="tg-panel">
					<a className="tg-panel-link" href="#" onClick={ this.reset }>
						Close all tabs
					</a>
				</div>

				<List items={ items } actions={ actions } />
			</div>
		);
	}
}

Index.propTypes = {
	items  : PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};
