import * as ActionTypes from '../constants/ActionTypes';

/**
 * API
 *
 * @see https://developer.chrome.com/extensions/tabs
 */
export default {
	/**
	 * Loads data
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	showTabs (action, dispatch) {
		chrome.tabs.query({}, tabs => {
			dispatch({ type: ActionTypes.SHOW_TABS, tabs });
		});
	},

	/**
	 * Highlights the given tabs
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	switchTab (action, dispatch) {
		let { index } = action;

		if (index) {
			index = Number.parseInt(index);

			chrome.tabs.highlight({
				tabs: [ index ]
			},
			window => {
				dispatch(action);
			});
		}
		else {
			dispatch({ type: ActionTypes.TAB_INDEX_NOT_FOUND });
		}
	},

	/**
	 * Closes selected tab
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	closeTab (action, dispatch) {
		let { id } = action;

		if (id) {
			id = Number.parseInt(id);

			chrome.tabs.remove(id, window => {
				dispatch(action);
			});
		}
		else {
			dispatch({ type: ActionTypes.TAB_ID_NOT_FOUND });
		}
	},

	/**
	 * Close all tabs
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	closeAllTabs (action, dispatch) {
		let { tabs } = action;

		if (tabs) {
			let tabs = tabs.map(({ id }) => id);

			chrome.tabs.remove(tabs, window => {
				chrome.tabs.create({
					url: 'chrome://newtab'
				},
				tab => {
					dispatch(action);
				});
			});
		}
		else {
			dispatch({ type: ActionTypes.TAB_ITEMS_NOT_FOUND });
		}
	},

	/**
	 * Discard all tabs
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	discardTabs (action, dispatch) {
		let { tabs } = action;

		if (tabs) {
			let promises = [];

			for (let tab of tabs) {
				let discard = new Promise((resolve, reject) => {
					chrome.tabs.discard(tab.id, function () {
						resolve();
					});
				});

				promises.push(discard);
			}

			let result = Promise.all(promises);

			result.then(result => {
				this.showTabs(...arguments);
			},
			error => {
				dispatch({ type: ActionTypes.TAB_COULD_NOT_BE_DISCARDED });
			});
		}
		else {
			dispatch({ type: ActionTypes.TAB_ITEMS_NOT_FOUND });
		}
	},

	/**
	 * Open browser extensions
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	openExtensions (action, dispatch) {
		let url = 'chrome://extensions/';

		chrome.tabs.query({ url }, ([ tab ]) => {
			if (tab) {
				chrome.tabs.highlight({
					tabs: [ tab.index ]
				},
				window => {
					dispatch(action);
				});
			}
			else {
				chrome.tabs.create({ url }, tab => {
					dispatch(action);
				});
			}
		});
	}
};
