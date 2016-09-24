import { List } from 'immutable';
import * as ActionTypes from '../actions';

export default function (state = '', action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.SWITCH_TAB:
			return state;

		default:
			return state;
	}
}
