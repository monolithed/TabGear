import React from 'react';
import ReactDOM from 'react-dom';
import RedBox from 'redbox-react';

import Root from './containers/Root';
import Store from './store/configure';

let store = Store(),
	index = document.getElementById('root');

if (process.env.NODE_ENV == 'production') {
	ReactDOM.render(<Root store={ store } />, index);
}
else {
	try {
		ReactDOM.render(<Root store={ store } />, index);
	}
	catch (error) {
		ReactDOM.render(<RedBox error={ error } />, index);
	}
}
