import { combineReducers } from 'redux';

import Tabs from './Tabs';
import Search from './Search';
import Layout from './Layout';

export default combineReducers({ ...Tabs, ...Layout, ...Search });
