import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import * as ActionTypes from '../actions'

let error = (state = null, action) => {
	let { type, error } = action;

	if (type === ActionTypes.RESET_ERROR_MESSAGE) {
		return null;
	}
	else if (error) {
		return action.error;
	}

	return state;
};

let list = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.RESET_ERROR_MESSAGE:
			return Object.assign(state, {});

		default:
			return state;
	}
};

export default combineReducers({ list, error, routing });
