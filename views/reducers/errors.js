import { List } from 'immutable';
import * as ActionTypes from '../actions';

export default function (state = '', action) {
	let { type, items, error } = action;

	switch (type) {
		case ActionTypes.ITEMS_FAILED:
			return error;

		case ActionTypes.ITEMS_LOADED:
			return 'LOADED';

		default:
			return state;
	}
}
