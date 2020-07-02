import React from 'react';
import Grid from '../Grid/Grid';
import { mount } from 'enzyme';

describe('<Grid />', () => {
	// create component
	const component = mount(<Grid />);

	it('renders without crashing', () => {
		mount(<Grid />);
	});

	it('has state', () => {
		expect(component.state('loaded')).toBe(true);
	});

	it('runs lifecycle methods', () => {
		const componentInstance = component.instance();
		//Accessing react lifecyle methods
		componentInstance.componentDidMount();
		componentInstance.playGrid();
		componentInstance.render();
	});
});
