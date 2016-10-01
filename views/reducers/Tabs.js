import * as ActionTypes from '../constants/ActionTypes';

export default {
	/**
	 * The data
	 *
	 * @param {Array} state
	 * @param {Object} action
	 * @returns {*}
	 */
	loadData (state = [], action) {
		let { type, tabs, error } = action;

		switch (type) {
			case ActionTypes.ITEMS_LOCKED:
				return state;

			case ActionTypes.SHOW_TABS:
				return tabs;

			default:
				return state;
		}
	},

	/**
	 * Loads data
	 *
	 * @param {Array} state
	 * @param {Object} action
	 * @returns {*}
	 */
	showTabs (state = [], action) {
		let { type, error, tabs } = action;

		switch (type) {
			case ActionTypes.SHOW_TABS:
				return tabs;

			case ActionTypes.CHROME_API_EXCEPTION:
				return error;

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
	}
};
