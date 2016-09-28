import * as ActionTypes from '../actions';
import { items } from '../stubs';

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
	 * @param {Function} next
	 */
	showTabs (action, next) {
		chrome.tabs.query({}, items => {
			next({ type: ActionTypes.SHOW_TABS, items });
		});
	},

	/**
	 * Highlights the given tabs
	 *
	 * @param {Object} action
	 * @param {Function} next
	 */
	switchTab (action, next) {
		let { index } = action;

		if (index) {
			index = Number.parseInt(index);

			chrome.tabs.highlight({
				tabs: [ index ]
			},
			window => {
				next(action);
			});
		}
		else {
			next({ type: ActionTypes.TAB_INDEX_NOT_FOUND });
		}
	},

	/**
	 * Closes selected tab
	 *
	 * @param {Object} action
	 * @param {Function} next
	 */
	closeTab (action, next) {
		let { id } = action;

		if (id) {
			id = Number.parseInt(id);

			chrome.tabs.remove(id, window => {
				next(action);
			});
		}
		else {
			next({ type: ActionTypes.TAB_ID_NOT_FOUND });
		}
	},

	/**
	 * Close all tabs
	 *
	 * @param {Object} action
	 * @param {Function} next
	 */
	closeAllTabs (action, next) {
		let { items } = action;

		if (items) {
			let tabs = items.map(({ id }) => id);

			chrome.tabs.remove(tabs, window => {
				chrome.tabs.create({
					url: 'chrome://newtab'
				},
				tab => {
					next(action);
				});
			});
		}
		else {
			next({ type: ActionTypes.TAB_ITEMS_NOT_FOUND });
		}
	},

	/**
	 * Discard all tabs
	 *
	 * @param {Object} action
	 * @param {Function} next
	 */
	discardTabs (action, next) {
		let { items } = action;

		if (items) {
			for (let tab of items) {
				chrome.tabs.discard(tab.id, tab => {
					next(action);
				});
			}
		}
		else {
			next({ type: ActionTypes.TAB_ITEMS_NOT_FOUND });
		}
	},

	/**
	 * Open browser extensions
	 *
	 * @param {Object} action
	 * @param {Function} next
	 */
	openExtensions (action, next) {
		let url = 'chrome://extensions/';

		chrome.tabs.query({ url }, ([ tab ]) => {
			if (tab) {
				chrome.tabs.highlight({
					tabs: [ tab.index ]
				},
				window => {
					next(action);
				});
			}
			else {
				chrome.tabs.create({ url }, tab => {
					next(action);
				});
			}
		});
	},

	/**
	 * Show credentials
	 *
	 * @param {Object} action
	 * @param {Function} next
	 */
	showCredentials (action, next) {
		next(action);
	}
};
