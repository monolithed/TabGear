import React, { Component, PropTypes } from 'react';

import Link from '../Link';
import Text from '../Text';
// import Share from '../Share';

class About extends Component
{
	constructor (properties) {
		super(...arguments);
	}

	getFeatures () {
		let features = [
			'feature_tab_list',
			'feature_search',
			'feature_incognito',
			'feature_discarding',
			'feature_moving',
			'feature_close_tabs',
			'feature_close_all_tabs',
			'feature_total_tabs',
			'feature_open_extensions',
			'feature_i18n',
			'feature_shortcuts',
			'feature_prevent_closing'
			// 'feature_highlighting',
			// 'feature_confirmation'
			// 'feature_navigation',
		];

		return features.map((feature, index) => {
			return <li className="tg-list__item" key={ index }>
						{ chrome.i18n.getMessage(feature) }
					</li>;
		});
	}

	render () {
		let { email, legal } = this.props.config;

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
						{/* &nbsp;*/}

						<Link href={ `mailto:${email}` } mods={ ['external', 'small'] }>
							{ email }
						</Link>

						<br />
						{ legal }
					</p>

					{/* <Share />*/}

				</Text>;
	}
}

About.propTypes = {
	config: PropTypes.object.isRequired
};

export default About;
