import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import items from './items';
import errors from './errors';
import onTab from './onTab';

export default combineReducers({ items, errors, onTab, routing });
