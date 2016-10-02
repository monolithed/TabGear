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
	 * Ignore the tab dialog
	 *
	 * @param {boolean} state
	 * @returns {Object}
	 */
	ignoreTabDialog (state = false) {
		return {
			type: ActionTypes.IGNORE_TAB_DIALOG,
			state
		};
	},

	/**
	 * Show the dialog to prevent closing multiple tabs
	 *
	 * @param {Array} tabs — the list of tabs to close
	 * @returns {Object}
	 */
	showDialog (tabs) {
		return {
			type: ActionTypes.SHOW_DIALOG,
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

