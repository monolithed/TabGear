import { items } from '../stabs';
import * as ActionTypes from '../actions';

export default store => next => action => {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	let { type } = action, resolve;

	switch (type) {
		case ActionTypes.SWITCH_TAB:
			action = actionWith({ type });

			if (process.env.NODE_ENV === 'production') {
				chrome.tabs.highlight({ tabs: action.id }, () => {
					next(action);
				});
			}
			else {
				next(action);
			}

			break;

		default:
			if (process.env.NODE_ENV === 'production') {
				chrome.tabs.query({}, items => {
					action = actionWith({
						type: ActionTypes.ITEMS_LOADED,
						items,
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
};
