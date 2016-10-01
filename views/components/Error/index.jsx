import React, { Component, PropTypes } from 'react';
import './index.css';

let Error = ({ error }) => {
	return <div> { error } </div>;
};

Error.propTypes = {};

export default Error;
