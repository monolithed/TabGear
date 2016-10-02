import React, { Component, PropTypes } from 'react';
import './index.css';

export default class Title extends Component {
	getTitle (view, store) {
		switch (view) {
			case 'About':
				return 'About';

			case 'Error':
				return 'Error';

			case 'Loading':
				return 'Loading...';

			case 'Tabs':
				return `${store.tabs.length} active tabs`;

			default:
				return '';
		}
	}

	render () {
		let { store, view } = this.props;

		return <div className="tg-title"> Tab Gear: { this.getTitle(view, store) }</div>;
	}
}

Title.propTypes = {
	store: PropTypes.object.isRequired,
	view: PropTypes.string.isRequired
};

export default Title;
