import React, { Component, PropTypes } from 'react';

import './index.css';
import Title from './Title';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Index extends Component {
	constructor (properties) {
		super(properties);
	}

	render () {
		let { store, actions, view } = this.props;

		return <div className="tg-index">
					<Title store={ store } view={ view } />
					<Header actions={ actions } store={ store} />
					<Body store={ store} actions={ actions} view={ view } />
					<Footer store={ store} actions={ actions} />
				</div>;
	}
}

Index.propTypes = {
	store  : PropTypes.object.isRequired,
	view   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};
