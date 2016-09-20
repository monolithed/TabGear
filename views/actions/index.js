import { Schemas } from '../middleware/api';

export const RESET_ERRORS = 'RESET_ERRORS';
export const ITEMS_LOCKED = 'ITEMS_LOCKED';
export const ITEMS_LOADED = 'ITEMS_LOADED';
export const ITEMS_FAILED = 'ITEMS_FAILED';

export function items () {
	return (dispatch, state) => {
		dispatch({ type: ITEMS_LOCKED });
	};
};

export function error () {
	return (dispatch, state) => {
		return dispatch({ type: RESET_ERRORS });
	};
};
