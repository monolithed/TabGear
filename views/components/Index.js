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
		return <div className="tg-index">
					<Title { ...this.props } />
					<Header { ...this.props } />
					<Body { ...this.props } />
					<Footer { ...this.props } />
				</div>;
	}
}

Index.propTypes = {
	store  : PropTypes.object.isRequired,
	view   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};
