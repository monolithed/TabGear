import React, { Component, PropTypes } from 'react';

import './index.css';
import Tabs from '../Tabs';
import About from '../About';
import Error from '../Error';

let Body = ({ store, actions, view }) => {
	let block = null

	switch (view) {
		// case 'load':
		// 	break

		case 'tabs':
			block = <Tabs tabs={ store.tabs } actions={ actions.Tabs } />;
			break;

		case 'about':
			block = <About actions={ actions.About } />;
			break;

		default:
			block = <Error actions={ actions.Error } />;
	}

	return <div className="tg-body"> { block } </div>;
}

Body.propTypes = {
	store  : PropTypes.object.isRequired,
	view   : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default Body;
