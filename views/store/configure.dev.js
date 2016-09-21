import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import api from '../middleware/api';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

export default function (state) {
	let middleware = applyMiddleware(thunk, api, createLogger()),
		composer = compose(middleware, DevTools.instrument());

	const store = createStore(rootReducer, state, composer);

	// Enable Webpack hot module replacement for reducers
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer.default);
		});
	}

	return store;
};
