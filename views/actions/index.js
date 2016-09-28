import * as ActionTypes from '../constants/ActionTypes';

export default {
	/**
	 * Show tabs
	 *
	 * @returns {Object}
	 */
	showTabs () {
		return {
			type: ActionTypes.SHOW_TABS
		};
	},

	/**
	 * Show errors
	 *
	 * @returns {Object}
	 */
	showErrors () {
		return {
			type: ActionTypes.SHOW_ERRORS
		};
	},

	/**
	 * Highlights the given tabs
	 *
	 * @param {string} index — the tab index to highlight
	 * @returns {Object}
	 */
	switchTab (index) {
		return {
			type: ActionTypes.SWITCH_TAB,
			index
		};
	},

	/**
	 * Closes selected tab
	 *
	 * @param {string} id — the tab id to close
	 * @returns {Object}
	 */
	closeTab (id) {
		return {
			type: ActionTypes.CLOSE_TAB,
			id
		};
	},

	/**
	 * Close all tabs
	 *
	 * @param {Array} items — the list of tabs to close
	 * @returns {Object}
	 */
	closeAllTabs (items) {
		return {
			type: ActionTypes.CLOSE_ALL_TABS,
			items
		};
	},

	/**
	 * Discards the tabs from memory
	 *
	 * @param {Array} items — the list of tabs to close
	 * @returns {Object}
	 */
	discardTabs (items) {
		return {
			type: ActionTypes.DISCARD_TABS,
			items
		};
	},

	/**
	 * Open browser extensions
	 *
	 * @returns {Object}
	 */
	openExtensions () {
		return {
			type: ActionTypes.OPEN_EXTENSIONS
		};
	},

	/**
	 * Show credentials
	 *
	 * @returns {Object}
	 */
	showCredentials () {
		return {
			type: ActionTypes.SHOW_CREDENTIALS
		};
	}
};

export * from '../constants/ActionTypes';
