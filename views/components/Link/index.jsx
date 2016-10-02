import React, { Component, PropTypes } from 'react';
import './index.css';

let Link = ({ text, mods = [], filter, index, onClick }) => {
	if (filter !== false) {
		let classes = ['tg-link', ...mods].join(' tg-link_');

		return <a className={ classes } href="#" tabIndex={ index } onClick={ onClick }>
			{ text }
		</a>;
	}

	return null;
}

Link.propTypes = {
	text   : PropTypes.string.isRequired,
	mods   : PropTypes.array,
	filter : PropTypes.bool,
	index  : PropTypes.number,
	onClick: PropTypes.func.isRequired
};

export default Link;
