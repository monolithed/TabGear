import React, { Component, PropTypes } from 'react';

import List from './List';
import './Index.css';

export default class Index extends Component {
	constructor (properties) {
		super(properties);

		this.onReset = this.onReset.bind(this);
	}

	onReset (event) {
		let { items } = this.props;

		this.props.onReset(items);
		event.preventDefault();
	}

	render () {
		let { items, onOpen, onClose } = this.props;

		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { items.length } active tabs:
				</div>

				<div className="tg-panel">
					<a className="tg-panel-link" href="#" onClick={ this.onReset }>
						Close all tabs
					</a>
				</div>

				<List items={ items } onOpen={ onOpen } onClose={ onClose } />
			</div>
		);
	}
}

Index.propTypes = {
	items: PropTypes.array.isRequired,
	onOpen: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};
