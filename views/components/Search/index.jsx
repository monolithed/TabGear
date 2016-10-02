import React, { Component, PropTypes } from 'react';
import './index.css';

class Search extends Component {
	render () {
		return <div>
			<input className="tg-search" type="text" placeholder="Search..." autoFocus="autoFocus" />
		</div>;
	}
}

Search.propTypes = {};

export default Search;
