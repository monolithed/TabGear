import { items } from '../stubs';
import * as ActionTypes from '../actions';

/**
 * @see https://developer.chrome.com/extensions/tabs
 */

export default store => next => action => {
	let actionWith = data => {
		return Object.assign({}, action, data);
	};

	let { type, index, id } = action;

	switch (type) {
		case ActionTypes.CLOSE_TAB:
			debugger
			if (process.env.NODE_ENV === 'production') {
				if (id) {
					id = Number.parseInt(id);

					try {
						chrome.tabs.remove([ id ], window => {
							let error = chrome.runtime.lastError;

							if (error) {
								next({
									type: ActionTypes.TAB_CLOSE_EXCEPTION,
									error
								});
							}
							else {
								next(action);
							}
						});
					}
					catch ({ message }) {
						next({
							type : ActionTypes.TAB_CLOSE_EXCEPTION,
							error: message
						});
					}
				}
				else {
					next({ type: ActionTypes.TAB_ID_NOT_FOUND });
				}
			}
			else {
				next(action);
			}

			break;

		case ActionTypes.SWITCH_TAB:
			if (process.env.NODE_ENV === 'production') {
				if (index) {
					index = Number.parseInt(index);

					try {
						chrome.tabs.highlight({ tabs: [ index ] }, window => {
							let error = chrome.runtime.lastError;

							if (error) {
								next({
									type: ActionTypes.TAB_OPEN_EXCEPTION,
									error
								});
							}
							else {
								next(action);
							}
						});
					}
					catch ({ message }) {
						next({
							type: ActionTypes.TAB_OPEN_EXCEPTION,
							error: message
						});
					}
				}
				else {
					next({ type: ActionTypes.TAB_INDEX_NOT_FOUND });
				}
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
};
