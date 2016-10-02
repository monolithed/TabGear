import React, { Component, PropTypes } from 'react';

import './index.css';
import Tabs from '../Tabs';
import Loading from '../Loading';
import About from '../About';
import Error from '../Error';

class Body extends Component {
	getComponent () {
		let components = [Loading, Tabs, About, Error],
			component = null;

		components.forEach((Component, key) => {
			if (this.props.view === Component.displayName) {
				component = <Component { ...this.props } key={key} />;
			}
		});

		return component;
	}

	render () {
		return <div className="tg-body"> { this.getComponent() } </div>;
	}
}

Body.propTypes = {
	store  : PropTypes.object.isRequired,
	view   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default Body;
