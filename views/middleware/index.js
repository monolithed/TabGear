import camelCase from 'camelcase';
import * as ActionTypes from '../constants/ActionTypes';

import methods from './api';

export default store => dispatch => action => {
	let state = store.getState();

	let { type, api } = action;

	try {
		dispatch({
			type: ActionTypes.SHOW_ERRORS
		});

		if (api) {
			let name = camelCase(type);

			return methods[name](action, dispatch);
		}

		return dispatch({ ...action, tabs: state.loadData });
	}
	catch (error) {
		dispatch({
			type : ActionTypes.CHROME_API_EXCEPTION,
			error: chrome.runtime.lastError || error.message
		});
	}
};
