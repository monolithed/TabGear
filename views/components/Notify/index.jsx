import React, { Component, PropTypes } from 'react';

import './index.css';
import Text from '../Text';

class Notify extends Component {
	render () {

		return <Text> { chrome.i18n.getMessage('wrong') } </Text>;
	}
}

Notify.propTypes = {
	config: PropTypes.object.isRequired
};

export default Notify;
