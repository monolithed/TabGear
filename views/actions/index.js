import * as ActionTypes from '../constants/ActionTypes';

export const Index = {
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
	}
};

export * from './Tabs';
export * from '../constants/ActionTypes';
