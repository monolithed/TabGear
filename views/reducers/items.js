import * as ActionTypes from '../actions';

export default function items (state = [], action) {
	let { type, items, error } = action;

	switch (type) {
		case ActionTypes.ITEMS_LOCKED:
			return state;

		case ActionTypes.ITEMS_LOADED:
			return items;

		default:
			return state;
	}
};
