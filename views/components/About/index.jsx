import React, { Component, PropTypes } from 'react';

import './index.css';
import Link from '../Link';
import Text from '../Text';
// import Share from '../Share';

class About extends Component {
	constructor (properties) {
		super(...arguments);
	}

	getFeatures () {
		let features = [
			'feature_tab_list',
			'feature_incognito',
			'feature_discarding',
			'feature_total_tabs',
			'feature_highlighting',
			'feature_prevent_closing',
			'feature_i18n',
			'feature_navigation',
			'feature_confirmation',
			'feature_shortcuts',
			'feature_close_tabs',
			'feature_close_all_tabs',
			'feature_open_extensions'
		];

		return features.map((feature, index) => {
			return <li className="tg-list__item" key={ index }>
						{ chrome.i18n.getMessage(feature) }
					</li>;
		});
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
						{ this.getFeatures() }
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

					{/*<Share />*/}

				</Text>;
	}
}

About.propTypes = {};

export default About;
