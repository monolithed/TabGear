import { List } from 'immutable';
import * as ActionTypes from '../actions';

export default function (state = '', action) {
	let { type, index } = action;

	if (!index) {
		throw new Error('Could not found index');
	}

	switch (type) {
		case ActionTypes.SWITCH_TAB:
			return index;

		case ActionTypes.TAB_ID_NOT_FOUND:
		case ActionTypes.TAB_ID_EXCEPTION:
			return type;

		default:
			return state;
	}
}
