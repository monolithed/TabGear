import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

import Middleware from '../middleware';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function (initialState) {
	let middleware = Middleware;

	if (process.env.NODE_ENV === 'production') {
		middleware = applyMiddleware(thunk, middleware);
	}
	else {
		middleware = applyMiddleware(thunk, middleware, reduxLogger());
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
