import React, { Component, PropTypes } from 'react';
import './index.css';

let Link = ({ children, href = '#', mods = [], filter, index, onClick }) => {
	if (filter !== false) {
		let classes = ['tg-link', ...mods].join(' tg-link_');

		return <a className={ classes } href={ href } tabIndex={ index } onClick={ onClick }>
			{ children }
		</a>;
	}

	return null;
}

Link.propTypes = {
	children: PropTypes.string.isRequired,
	mods   : PropTypes.array,
	filter : PropTypes.bool,
	index  : PropTypes.number,
	onClick: PropTypes.func
};

export default Link;
