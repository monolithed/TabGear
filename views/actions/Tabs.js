import * as ActionTypes from '../constants/ActionTypes';

export const Tabs = {
	/**
	 * Show tabs
	 *
	 * @param {Array}
	 * @returns {Object}
	 */
	showTabs (tabs, text) {
		return {
			type: ActionTypes.SHOW_TABS,
			tabs,
		};
	},

	/**
	 * Search tabs
	 *
	 * @param {Array}
	 * @returns {Object}
	 */
	searchTabs (tabs, text) {
		return {
			type: ActionTypes.SEARCH_TABS,
			tabs,
			text
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
	}
};

