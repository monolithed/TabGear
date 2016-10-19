import React, { Component, PropTypes } from 'react';

import * as ActionTypes from '../../constants/ActionTypes';
import Error from '../Error';
import Discard from './Discard';
import Close from './Close';

let Dialog = ({ tabs, actions, type, config }) => {
	switch (type) {
		case ActionTypes.CLOSE_ALL_TABS:
			return <Close tabs={ tabs } actions={ actions } />;

		case ActionTypes.DISCARD_TABS:
			return <Discard tabs={ tabs } actions={ actions } />;

		default:
			return <Error config={ config } />;
	}
};

Dialog.propTypes = {
	tabs   : PropTypes.object.isRequired,
	type   : PropTypes.string.isRequired,
	config : PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
};

export default Dialog;
