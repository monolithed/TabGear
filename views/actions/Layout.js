import * as ActionTypes from '../constants/ActionTypes';

export const Layout = {
	/**
	 * Close all tabs
	 *
	 * @param {Array} tabs — the list of tabs to close
	 * @returns {Object}
	 */
	closeAllTabs (tabs) {
		return {
			type: ActionTypes.CLOSE_ALL_TABS,
			tabs
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
	 * Discards the tabs from memory
	 *
	 * @param {Array} tabs — the list of tabs to close
	 * @returns {Object}
	 */
	discardTabs (tabs) {
		return {
			type: ActionTypes.DISCARD_TABS,
			tabs
		};
	}
};

