import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';
import Text from '../Text';

class About extends Component {
	constructor (properties) {
		super(...arguments);
	}

	render () {
		return <Text>
					<p className="tg-block">Tag Gears is an extension for Google Chrome that provides an intuitive tabs management</p>
					<p className="tg-block">Some of the features that will come handy:</p>

					<ul className="tg-list">
						<li>List of all open tabs.</li>
						<li>See incognito tabs.</li>
						<li>Tab discarding. Allows Chrome to automatically discard tabs that aren't of great interest to you when it's detected that system memory is running pretty low.</li>
						<li>Displays the number of tabs you currently have open in all your Chrome windows.</li>
						<li>Highlighting your current and incognito tabs.</li>
						<li>Do you want to prevent closing multiple tabs? It's possible by default and configurable!</li>
						<li>Quick navigation with Tab and Shift+Tab keys.</li>
						<li>Use Enter key for action confirmation</li>
						<li>Press Ctrl+Shift+T or ⌘+⇧+T keys to show or hide the browser action popup.</li>
						<li>Closing tabs.</li>
						<li>Closing all open tabs.</li>
						<li>Quick opening your extensions.</li>
					</ul>

					<p className="tg-block_small">All rights reserved. © LLC Pobedit Microsystems<br />
					For Issues or Feature requests, mail to: <Link href="mailto:monolihed@gmail.com" text="monolihed@gmail.com" mods={[ 'external' ]} />
					</p>
				</Text>;
	}
}

About.propTypes = {};

export default About;
