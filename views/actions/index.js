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

export function onOpen (index) {
	return {
		type: ActionTypes.OPEN_TAB,
		index
	};
};

export function onClose (id) {
	return {
		type: ActionTypes.CLOSE_TAB,
		id
	};
};

export function onReset (items) {
	return {
		type: ActionTypes.RESET_TABS,
		items
	};
};
