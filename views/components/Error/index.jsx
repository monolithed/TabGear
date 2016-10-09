import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';
import Text from '../Text';

class Error extends Component {
	render () {
		return <Text>
					<p>
						{ chrome.i18n.getMessage('wrong') }
						<br />
						{ chrome.i18n.getMessage('contact') }
						<Link href="mailto:monolihed@gmail.com" mods={[ 'external' ]}>
							monolithed@gmail.com
						</Link>.
					</p>
				</Text>;
	}
}

Error.propTypes = {};

export default Error;
