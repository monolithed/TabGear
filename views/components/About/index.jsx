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
						{ chrome.i18n.getMessage('description') }
					</p>
					<p className="tg-block">
						{ chrome.i18n.getMessage('features') }
					</p>

					<ul className="tg-list">
						<li>
							{ chrome.i18n.getMessage('feature_tab_list') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_incognito') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_discarding') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_total_tabs') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_highlighting') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_prevent_closing') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_navigation') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_confirmation') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_shortcuts') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_close_tabs') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_close_all_tabs') }
						</li>
						<li>
							{ chrome.i18n.getMessage('feature_open_extensions') }
						</li>
					</ul>

					<p className="tg-block_small">
						{ chrome.i18n.getMessage('issues') }
						&nbsp;
						<Link href="mailto:monolihed@gmail.com" mods={[ 'external' ]}>
							monolihed@gmail.com
						</Link>
						<br />
						{ chrome.i18n.getMessage('copyright') }
					</p>
				</Text>;
	}
}

About.propTypes = {};

export default About;
