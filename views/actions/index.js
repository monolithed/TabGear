import * as ActionTypes from '../constants';

export * from '../constants';

export function items () {
	return {
		type: ActionTypes.ITEMS_LOCKED
	};
};

export function errors () {
	return {
		type: ActionTypes.RESET_ERRORS
	};
};

export function onTab (data) {
	return {
		type: ActionTypes.SWITCH_TAB
	};
};
