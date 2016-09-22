import { Schemas } from '../middleware/api';
import stabs from '../stabs';

export const RESET_ERRORS = 'RESET_ERRORS';
export const ITEMS_LOCKED = 'ITEMS_LOCKED';
export const ITEMS_LOADED = 'ITEMS_LOADED';
export const ITEMS_FAILED = 'ITEMS_FAILED';

// export function items () {
// 	return (dispatch, state) => {
// 		dispatch({ type: ITEMS_LOCKED });
//
// 		// ...
// 		dispatch({ type: ITEMS_LOADED, items: stabs.items });
// 	};
// };

export function errors () {
	return { type: RESET_ERRORS };
};
