import camelCase from 'camelcase';
import * as ActionTypes from '../constants/ActionTypes';
import { tabs } from '../stubs';

import methods from './api';

export default store => dispatch => action => {
	let { type, api } = action;

	try {
		if (api) {
			let name = camelCase(type);

			return methods[name](action, dispatch);
		}

		return dispatch({ ...action, tabs });
	}
	catch (error) {
		dispatch({
			type : ActionTypes.CHROME_API_EXCEPTION,
			error: chrome.runtime.lastError || error.message
		});
	}
};
