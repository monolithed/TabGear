import * as ActionTypes from '../constants/ActionTypes';

export default {
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

			case ActionTypes.UNKNOWN_ERROR:
				return error;

			default:
				return state;
		}
	},

	/**
	 * Detect view
	 *
	 * @param {string} state — the error string
	 * @param {Object} action
	 * @returns {*}
	 */
	view (state = 'load', action) {
		let { type, error } = action;

		switch (type) {
			case ActionTypes.SHOW_TABS:
				return 'tabs';

			case ActionTypes.SHOW_CREDENTIALS:
				return 'about';

			case ActionTypes.SHOW_ERRORS:
				return 'error';

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
		let { type, tabs, error } = action;

		switch (type) {
			case ActionTypes.TAB_ITEMS_NOT_FOUND:
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			case ActionTypes.CLOSE_ALL_TABS:
				return tabs;

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
		let { type, tabs, error } = action;

		switch (type) {
			case ActionTypes.TAB_ITEMS_NOT_FOUND:
			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

			case ActionTypes.DISCARD_TABS:
				return tabs;

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
		let { type, tabs, error } = action;

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
			case ActionTypes.SHOW_CREDENTIALS:
				return true;

			default:
				return state;
		}
	}
};
