import React, { Component, PropTypes } from 'react';
import './index.css';

class Text extends Component {
	render () {
		return <div className="tg-box"> { this.props.value } </div>;
	}
}

Text.propTypes = { };

export default Text;
