import { combineReducers } from 'redux';

import items from './items';

import error from './events/error';
import open from './events/open';
import close from './events/close';
import reset from './events/reset';

export default combineReducers({ items, error, open, close, reset });
