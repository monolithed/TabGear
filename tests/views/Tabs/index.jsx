import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow, mount, render } from 'enzyme';

import Tabs from '../../../views/components/Tabs';
import * as props from '../../../stubs/props';

test('Tabs view', () => {
	let states = ['', 'is-active', 'is-empty'];

	for (let state of states) {
		let component = renderer.create(<Tabs { ...props } state={ state } />);
		let view = component.toJSON();

		let actual = expect(view);
		actual.toMatchSnapshot();
	}
});
