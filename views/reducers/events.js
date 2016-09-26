import * as ActionTypes from '../actions';

export default {
	/**
	 * Loads data
	 *
	 * @param {Array} state
	 * @param {Object} action
	 * @returns {*}
	 */
	load (state = [], action) {
		return state;
	},

	/**
	 * Shows error
	 *
	 * @param {string} state — the error string
	 * @param {Object} action
	 * @returns {*}
	 */
	errors (state = '', action) {
		let { type, error } = action;

		switch (type) {
			case ActionTypes.ITEMS_FAILED:
				return error;

			case ActionTypes.ITEMS_LOADED:
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
	open (state = '', action) {
		let { type, index } = action;

		switch (type) {
			case ActionTypes.OPEN_TAB:
				return index;

			case ActionTypes.TAB_INDEX_NOT_FOUND:
			case ActionTypes.TAB_ID_EXCEPTION:
				return type;

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
	close (state = '', action) {
		let { type, id } = action;

		switch (type) {
			case ActionTypes.TAB_ID_NOT_FOUND:
			case ActionTypes.TAB_CLOSE_EXCEPTION:
				return type;

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
	reset (state = [], action) {
		let { type, items } = action;

		switch (type) {
			case ActionTypes.TAB_ID_NOT_FOUND:
			case ActionTypes.TAB_CLOSE_EXCEPTION:
				return type;

			case ActionTypes.RESET_TABS:
				return items;

			default:
				return state;
		}
	}
};
