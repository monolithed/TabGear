import camelCase from 'camelcase';
import * as ActionTypes from '../constants/ActionTypes';
import { items } from '../stubs';

import api from './api';

export default store => dispatch => action => {
	let { type } = action;

	if (process.env.NODE_ENV !== 'production') {
		return dispatch({ items, ...action });
	}

	try {
		let method = camelCase(type);

		return api[method](action, dispatch);
	}
	catch (error) {
		dispatch({
			type : ActionTypes.CHROME_API_EXCEPTION,
			error: chrome.runtime.lastError || error.message
		});
	}
};
