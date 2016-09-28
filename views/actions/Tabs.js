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
	}
};
