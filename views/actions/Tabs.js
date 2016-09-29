import * as ActionTypes from '../constants/ActionTypes';

export const Tabs = {
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
};

