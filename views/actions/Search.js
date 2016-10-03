import * as ActionTypes from '../constants/ActionTypes';

export const Search = {
	/**
	 * Search tabs
	 *
	 * @param {Array} tabs
	 * @param {string} text
	 * @returns {Object}
	 */
	searchTabs (tabs, text) {
		return {
			type: ActionTypes.SEARCH_TABS,
			tabs,
			text
		};
	}
};
