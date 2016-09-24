import { items } from '../stabs';
import * as ActionTypes from '../actions';

export default store => next => action => {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	let { type } = action, resolve;

	switch (type) {
		case ActionTypes.SWITCH_TAB:
			// console.log(store.getState())

			// debugger
			if (process.env.NODE_ENV === 'production') {
				let { id: tabs } = action.id;

				if (!tabs) {
					return next({ type: ActionTypes.TAB_ID_NOT_FOUND });
				}

				chrome.tabs.highlight({ tabs }, () => {
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
