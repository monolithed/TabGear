import camelCase from 'camelcase';
import * as ActionTypes from '../actions';
import { items } from '../stubs';

import api from './api';

export default store => next => action => {
	let { type } = action;

	if (process.env.NODE_ENV !== 'production') {
		return next({ items, ...action });
	}

	try {
		let method = camelCase(type);

		return api[method](action, next);
	}
	catch (error) {
		next({
			type : ActionTypes.CHROME_API_EXCEPTION,
			error: chrome.runtime.lastError || error.message
		});
	}
};
