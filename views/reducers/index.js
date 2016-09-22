import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import items from './items';
import errors from './errors';

export default combineReducers({ items, errors, routing });
