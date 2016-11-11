import React, { Component, PropTypes } from 'react';
import Iframe from 'react-iframe';

class Share extends Component {
	facebook () {
		let url = new URL('https://www.facebook.com/plugins/like.php');

		let query = {
			href      : 'https://developers.facebook.com/docs/plugins/',
			appId     : '1216869845036664',
			layout    : 'standard',
			action    : 'like',
			size      : 'small',
			show_faces: 'true',
			share     : 'false',
			width     : '450',
			height    : '80'
		};

		for (let key in query) {
			if (Object.prototype.hasOwnProperty.call(query, key)) {
				url.searchParams.append(key, query[key]);
			}
		}

		return <Iframe url={url.href} width="400" height="20" position="relative" />;
	}

	render () {
		return this.facebook();
	}
}

Share.propTypes = { };

export default Share;
