import { combineReducers } from 'redux';

import items from './items';
import errors from './errors';
import onOpen from './onOpen';
import onClose from './onClose';

export default combineReducers({ items, errors, onOpen, onClose });
