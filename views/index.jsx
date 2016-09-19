import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import Store from './store/configure';

let store = Store(),
	index = document.getElementById('root');

let history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV) {
	try {
		ReactDOM.render(<Root store={ store } history={ history } />, index);
	}
	catch (error) {
		ReactDOM.render(<RedBox error={ error } />, index);
	}
}
else {
	ReactDOM.render(<Root store={ store } history={ history } />, index);
}
