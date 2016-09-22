import { items } from '../stabs';
import * as ActionTypes from '../actions';

export default store => next => action => {
	next({ type: ActionTypes.ITEMS_LOADED, items, error: null });
};
