import * as ActionTypes from '../actions';

import close from './close';
import open from './open';
import load from './load';

/**
 * @see https://developer.chrome.com/extensions/tabs
 */
export default store => next => action => {
	let { type, index, id } = action;

	switch (type) {
		case ActionTypes.CLOSE_TAB:
			return close(action, next);

		case ActionTypes.OPEN_TAB:
			return open(action, next);

		default:
			return load(action, next);
	}
};
