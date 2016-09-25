import React, { Component, PropTypes } from 'react';
import List from './List.jsx';

export default class Index extends Component {
	render () {
		let { items, onOpen, onClose } = this.props;

		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { items.length } active tabs:
				</div>

				<List items={ items } onOpen={ onOpen } onClose={ onClose } />
			</div>
		);
	}
}

Index.propTypes = {
	items: PropTypes.array.isRequired,
	onOpen: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};
