import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';
import Text from '../Text';

class Error extends Component {
	render () {
		return <Text>
					<p>
						{ chrome.i18n.getMessage('Something went wrong!') }
						<br />
						{ chrome.i18n.getMessage('Please contact us at') }
						<Link href="mailto:monolihed@gmail.com" mods={[ 'external' ]}>
							monolithed@gmail.com
						</Link>.
					</p>
				</Text>;
	}
}

Error.propTypes = {};

export default Error;
