import { List } from 'immutable';
import * as ActionTypes from '../actions';

export default function (state = '', action) {
	let { type, items } = action;

	switch (type) {
		case ActionTypes.TAB_ID_NOT_FOUND:
		case ActionTypes.TAB_CLOSE_EXCEPTION:
			return type;

		case ActionTypes.RESET_TABS:
			return items;

		default:
			return state;
	}
}
