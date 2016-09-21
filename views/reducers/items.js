import { Record } from 'immutable';
import * as ActionTypes from '../actions';

const record = Record({
	items: null,
	error: null,
	state: null
})();

export default function (state = record, action) {
	let { type, items, error } = action;

	switch (type) {
		case ActionTypes.ITEMS_LOCKED:
			return state;

		case ActionTypes.ITEMS_LOADED:
			return state.merge({ items, error: null });

		case ActionTypes.ITEMS_FAILED:
			return state.merge({ error, items: null });

		default:
			return state;
	}
};
