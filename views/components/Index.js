import React, { Component, PropTypes } from 'react';

import List from './List.jsx';

let items = [
	{
		title: 'Google Maps',
		url: 'https://maps.google.com',
		icon: 'https://www.google.com/images/branding/product/ico/maps_32dp.ico',
		id: 0,
		active: false
	},

	{
		title: 'Google Chrome',
		url: 'https://google.com',
		icon: 'https://www.google.com/images/icons/product/chrome-32.png',
		id: 1,
		active: false
	}
];

export default class Index extends Component {
	render () {
		return (
			<div className="tg-body">
				<div className="tg-title">
					Tab Gear found { this.props.total } active tabs:
				</div>

				<List items={ items } />
			</div>
		);
	}
}

Index.propTypes = {
	total: PropTypes.number.isRequired
};
