import * as ActionTypes from '../constants/ActionTypes';

export default {
	/**
	 * Loads data
	 *
	 * @returns {Object}
	 */
	load () {
		return {
			type: ActionTypes.ITEMS_LOADED
		};
	},

	/**
	 * Shows error
	 *
	 * @returns {Object}
	 */
	errors () {
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
	open (index) {
		return {
			type: ActionTypes.OPEN_TAB,
			index
		};
	},

	/**
	 * Closes selected tab
	 *
	 * @param {string} id — the tab id to close
	 * @returns {Object}
	 */
	close (id) {
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
	reset (items) {
		return {
			type: ActionTypes.RESET_TABS,
			items
		};
	}
};

export * from '../constants/ActionTypes';
