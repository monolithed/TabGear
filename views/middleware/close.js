import * as ActionTypes from '../actions';

export default function (action, next) {
	let { id, items, type } = action;

	if (process.env.NODE_ENV === 'production') {
		if (id) {
			let tabs = [];

			if (type === ActionTypes.CLOSE_TAB) {
				id = Number.parseInt(id);
				tabs.push(id);
			}
			else {
				tabs = items.map(({ id }) => id);
			}

			try {
				chrome.tabs.remove(tabs, window => {
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
}