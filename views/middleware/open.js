import * as ActionTypes from '../actions';

export default function (action, next) {
	let { index } = action;

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
					type : ActionTypes.TAB_OPEN_EXCEPTION,
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
}