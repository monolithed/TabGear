import React, { Component, PropTypes } from 'react';
import List from './List';
import Overlay from './Overlay';

class Tabs extends Component {
	render () {
		let { tabs, state } = this.props;

		return <div>
					<List items={ tabs.actual } tabs={ state } { ...props } />

					<Overlay state={ state }>
						<List items={ tabs.search } state={ state } { ...props } />
					</Overlay>
				</div>;
	}
}

Tabs.propTypes = {
	tabs   : PropTypes.object.isRequired,
	state  : PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired
};

export default Tabs;
