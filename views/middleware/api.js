import { items } from '../stabs';
import * as ActionTypes from '../actions';

export default store => next => action => {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	let resolve = actionWith({
		type: ActionTypes.ITEMS_LOADED,
		items,
	});

	next(resolve);
};
