import * as ActionTypes from '../constants/ActionTypes';
import Fuse from 'fuse.js';

export default {
	/**
	 * Search tabs
	 *
	 * @param {Array} state
	 * @param {Object} action
	 * @returns {*}
	 */
	searchTabs (state = [], action) {
		let { type, tabs, text, error } = action;

		switch (type) {
			case ActionTypes.SEARCH_TABS:
				let verbose = process.env.NODE_ENV !== 'production';

				let fuse = new Fuse(tabs, {
					verbose,
					threshold    : 0.3,
					caseSensitive: false,
					shouldSort   : true,
					keys         : [ 'title' ]
				});

				return fuse.search(text);

			case ActionTypes.UNKNOWN_ERROR:
				return error;

			default:
				return state;
		}
	}
};
