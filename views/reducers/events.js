import * as ActionTypes from '../actions';

export default {
	/**
	 * Loads data
	 *
	 * @param {Array} state
	 * @param {Object} action
	 * @returns {*}
	 */
	showTabs (state = [], action) {
		let { type, error } = action;

		switch (type) {
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			default:
				return state;
		}
	},

	/**
	 * Shows error
	 *
	 * @param {string} state — the error string
	 * @param {Object} action
	 * @returns {*}
	 */
	showErrors (state = '', action) {
		let { type, error } = action;

		switch (type) {
			case ActionTypes.ITEMS_FAILED:
				return error;

			case ActionTypes.SHOW_TABS:
				return '';

			default:
				return state;
		}
	},

	/**
	 * Highlights the given tabs
	 *
	 * @param {string} state — the tab index to highlight
	 * @param {Object} action
	 * @returns {*}
	 */
	switchTab (state = '', action) {
		let { type, index, error } = action;

		switch (type) {
			case ActionTypes.SWITCH_TAB:
				return index;

			case ActionTypes.TAB_INDEX_NOT_FOUND:
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			default:
				return state;
		}
	},

	/**
	 * Closes selected tab — the tab id to close
	 *
	 * @param {string} state
	 * @param {Object} action
	 * @returns {*}
	 */
	closeTab (state = '', action) {
		let { type, id, error } = action;

		switch (type) {
			case ActionTypes.TAB_ID_NOT_FOUND:
			case ActionTypes.TAB_CLOSE_EXCEPTION:
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			case ActionTypes.CLOSE_TAB:
				return id;

			default:
				return state;
		}
	},

	/**
	 * Close all tabs
	 *
	 * @param {Array} state — the list of tabs to close
	 * @param {Object} action
	 * @returns {*}
	 */
	closeAllTabs (state = [], action) {
		let { type, items, error } = action;

		switch (type) {
			case ActionTypes.TAB_ITEMS_NOT_FOUND:
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			case ActionTypes.CLOSE_ALL_TABS:
				return items;

			default:
				return state;
		}
	},

	/**
	 * Discards the tabs from memory
	 *
	 * @param {Array} state — the list of tabs to discard
	 * @param {Object} action
	 * @returns {*}
	 */
	discardTabs (state = [], action) {
		let { type, items, error } = action;

		switch (type) {
			case ActionTypes.TAB_ITEMS_NOT_FOUND:
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			case ActionTypes.DISCARD_TABS:
				return items;

			default:
				return state;
		}
	},

	/**
	 * Open browser extensions
	 *
	 * @param {boolean} state
	 * @param {Object} action
	 * @returns {*}
	 */
	openExtensions (state = false, action) {
		let { type, items, error } = action;

		switch (type) {
			case ActionTypes.TAB_CLOSE_EXCEPTION:
				return error;

			case ActionTypes.OPEN_EXTENSIONS:
				return true;

			default:
				return state;
		}
	},

	/**
	 * Show credentials
	 *
	 * @param {boolean} state
	 * @param {Object} action
	 * @returns {*}
	 */
	showCredentials (state = false, action) {
		let { type, error} = action;

		switch (type) {
			case ActionTypes.UNKNOWN_ERROR:
				return error;

			case ActionTypes.SHOW_CREDENTIALS:
				return true;

			default:
				return state;
		}
	}
};
