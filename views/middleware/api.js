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
		chrome.tabs.query({}, items => {
			dispatch({ type: ActionTypes.SHOW_TABS, items });
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
		let { items } = action;

		if (items) {
			let tabs = items.map(({ id }) => id);

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
		let { items } = action;

		if (items) {
			for (let tab of items) {
				chrome.tabs.discard(tab.id, tab => {
					dispatch(action);
				});
			}
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
	},

	/**
	 * Show credentials
	 *
	 * @param {Object} action
	 * @param {Function} dispatch
	 */
	showCredentials (action, dispatch) {
		dispatch(action);
	}
};
