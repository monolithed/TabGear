import * as ActionTypes from '../constants/ActionTypes';

export const Search = {
	/**
	 * Search tabs
	 *
	 * @param {Array} search
	 * @param {string} text
	 * @returns {Object}
	 */
	searchTabs (search, text) {
		return {
			type: ActionTypes.SEARCH_TABS,
			search,
			text
		};
	}
};
