import React, { Component, PropTypes } from 'react';
import './index.css';

class Text extends Component {
	render () {
		let { className = '' } = this.props;

		return <div className={ `tg-box ${className}` }>
			{ this.props.children }
		</div>;
	}
}

Text.propTypes = { };

export default Text;
