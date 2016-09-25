import * as ActionTypes from '../actions';
import { items } from '../stubs';

export default function (action, next) {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	if (process.env.NODE_ENV === 'production') {
		chrome.tabs.query({}, items => {
			action = actionWith({
				type: ActionTypes.ITEMS_LOADED,
				items
			});

			next(action);
		});
	}
	else {
		action = actionWith({
			type: ActionTypes.ITEMS_LOADED,
			items,
		});

		next(action);
	}
}