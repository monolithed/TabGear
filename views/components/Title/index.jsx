import React, { Component, PropTypes } from 'react';

import './index.css';

let Title = ({ total }) => {
	return <div className="tg-title"> Tab Gear found { total } active tabs:</div>;
};

Title.propTypes = {
	total: PropTypes.number.isRequired
};

export default Title;
