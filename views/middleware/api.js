import { items } from '../stabs';
import * as ActionTypes from '../actions';

export default store => next => action => {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	let { type, id } = action;

	switch (type) {
		case ActionTypes.SWITCH_TAB:
			if (process.env.NODE_ENV === 'production') {
				if (id) {
					id = Number.parseInt(id);

					chrome.tabs.highlight({ tabs: id }, () => {
						next(action);
					});
				}
				else {
					next({ type: ActionTypes.TAB_ID_NOT_FOUND });
				}
			}
			else {
				next(action);
			}

			break;

		default:
			action = actionWith({
				type: ActionTypes.ITEMS_LOADED,
				items,
			});

			if (process.env.NODE_ENV === 'production') {
				chrome.tabs.query({}, items => {
					next(action);
				});
			}
			else {
				next(action);
			}
	}
};
