import * as ActionTypes from '../../actions';

export default function (state = '', action) {
	let { type, index } = action;

	switch (type) {
		case ActionTypes.OPEN_TAB:
			return index;

		case ActionTypes.TAB_INDEX_NOT_FOUND:
		case ActionTypes.TAB_ID_EXCEPTION:
			return type;

		default:
			return state;
	}
}
