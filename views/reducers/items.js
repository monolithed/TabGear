import { List } from 'immutable';
import * as ActionTypes from '../actions';

export default function items (state = List(), action) {
	let { type, items, error } = action;

	switch (type) {
		case ActionTypes.ITEMS_LOCKED:
			return state;

		case ActionTypes.ITEMS_LOADED:
			return state.merge(items);

		default:
			return state;
	}
};