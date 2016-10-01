import React, { Component, PropTypes } from 'react';
import './index.css';

let Link = ({ text, filter, index, onClick }) => {
	if (filter !== false) {
		return <a className="tg-link tg-link_block" href="#" tabIndex={ index } onClick={ onClick }>
			{ text }
		</a>;
	}

	return null;
}

Link.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Link;
