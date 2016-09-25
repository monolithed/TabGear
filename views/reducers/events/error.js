import * as ActionTypes from '../../actions';

export default function (state = '', action) {
	let { type, error } = action;

	switch (type) {
		case ActionTypes.ITEMS_FAILED:
			return error;

		case ActionTypes.ITEMS_LOADED:
			return '';

		default:
			return state;
	}
}
