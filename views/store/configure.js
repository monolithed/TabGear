import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import api from '../middleware/api';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function (initialState) {
	let middleware = null;

	if (process.env.NODE_ENV === 'production') {
		let middleware = applyMiddleware(thunk, api);
	}
	else {
		middleware = applyMiddleware(thunk, api, reduxLogger());
		middleware = compose(middleware, DevTools.instrument());

		// Enable Webpack hot module replacement for reducers
		if (module.hot) {
			module.hot.accept('../reducers', () => {
				store.replaceReducer(rootReducer.default);
			});
		}
	}

	return createStore(rootReducer, initialState, middleware);
};
