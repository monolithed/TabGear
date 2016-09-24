import React, { Component, PropTypes } from 'react';
import List from './List.jsx';

export default class Index extends Component {
	render () {
		let { items, onTab } = this.props;

		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { this.props.total } active tabs:
				</div>

				<List items={ items } onTab={ onTab} />
			</div>
		);
	}
}

Index.propTypes = {
	total: PropTypes.number.isRequired,
	items: PropTypes.array.isRequired,
	onTab: PropTypes.func.isRequired
};
