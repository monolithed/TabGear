import React, { Component, PropTypes } from 'react';

import './index.css';
import Tabs from '../Tabs';
import Loading from '../Loading';
import About from '../About';
import Error from '../Error';

class Body extends Component {
	getComponent () {
		switch (this.props.view) {
			case 'Loading':
				return <Loading { ...this.props } />;

			case 'Tabs':
				return <Tabs { ...this.props } />;

			case 'About':
				return <About { ...this.props } />;

			default:
				return <Error { ...this.props } />;
		}
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
