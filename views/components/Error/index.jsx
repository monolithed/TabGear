import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';
import Text from '../Text';

class Error extends Component {
	render () {
		return <Text>
					<p>Something went wrong!<br />
						Please contact us at <Link href="mailto:monolihed@gmail.com" text="monolihed@gmail.com" mods={[ 'external' ]} />.</p>
				</Text>;
	}
}

Error.propTypes = {};

export default Error;
