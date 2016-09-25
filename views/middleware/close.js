import * as ActionTypes from '../actions';

export default function (action, next) {
	let { id, items, type } = action;

	if (process.env.NODE_ENV === 'production') {
		if (id) {
			let tabs = [];

			if (type === ActionTypes.RESET_TABS) {
				tabs = items.map(({ id }) => id);
			}
			else {
				id = Number.parseInt(id);
				tabs.push(id);
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
						if (type === ActionTypes.RESET_TABS) {
							chrome.tabs.create({
								url: 'chrome://newtab'
							},
							tab => {
								next(action);
							});
						}
						else {
							next(action);
						}
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