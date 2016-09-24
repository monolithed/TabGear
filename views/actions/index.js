import * as ActionTypes from '../constants';

export function errors () {
	return {
		type: ActionTypes.RESET_ERRORS
	};
};

export function onTab (id) {
	return {
		type: ActionTypes.SWITCH_TAB,
		id
	};
};

export * from '../constants';
