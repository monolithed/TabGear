import React, { Component, PropTypes } from 'react';

import Text from '../Text';
import './index.css';

class Loading extends Component {
	render () {
		return <Text> { chrome.i18n.getMessage('Loading…') } </Text>;
	}
}

Loading.propTypes = {};

export default Loading;
