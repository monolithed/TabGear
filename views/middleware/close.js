import * as ActionTypes from '../actions';

export default function (action, next) {
	let { id } = action;

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
}