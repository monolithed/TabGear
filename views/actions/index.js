import { CALL_API, Schemas } from '../middleware/api';

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export function loadTabs () {
	return (dispatch, getState) => {
		return dispatch({
			type: RESET_ERROR_MESSAGE
		});
	};
}

export function resetErrorMessage () {
	return {
		type: RESET_ERROR_MESSAGE
	};
};
