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
					<p className="tg-block">
						{ chrome.i18n.getMessage('Tag Gears is an extension for Google Chrome that provides an intuitive tabs management') }
					</p>
					<p className="tg-block">
						{ chrome.i18n.getMessage('Some of the features that will come handy:') }
					</p>

					<ul className="tg-list">
						<li>
							{ chrome.i18n.getMessage('List of all open tabs.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('See incognito tabs.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Tab discarding. Allows Chrome to automatically discard tabs that aren\'t of great interest to you when it\'s detected that system memory is running pretty low.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Displays the number of tabs you currently have open in all your Chrome windows.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Highlighting your current and incognito tabs.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Do you want to prevent closing multiple tabs? It\'s possible by default and configurable!') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Quick navigation with Tab and Shift+Tab keys.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Use Enter key for action confirmation') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Press Ctrl+Shift+T or ⌘+⇧+T keys to show or hide the browser action popup.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Closing tabs.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Closing all open tabs.') }
						</li>
						<li>
							{ chrome.i18n.getMessage('Quick opening your extensions.') }
						</li>
					</ul>

					<p className="tg-block_small">
						{ chrome.i18n.getMessage('All rights reserved. © LLC Pobedit Microsystems') }
						<br />
						{ chrome.i18n.getMessage('For Issues or Feature requests, mail to:') }

						<Link href="mailto:monolihed@gmail.com" mods={[ 'external' ]}>
							monolihed@gmail.com
						</Link>
					</p>
				</Text>;
	}
}

About.propTypes = {};

export default About;
