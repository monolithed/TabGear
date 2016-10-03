import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';
import Text from '../Text';

class Error extends Component {
	render () {
		return <div className="tg-box">
					<p>Something went wrong!<br />
						Please contact us at <Link href="mailto:monolihed@gmail.com" text="monolihed@gmail.com" mods={[ 'external' ]} />.</p>
				</div>;
	}
}

Error.propTypes = {};

export default Error;
