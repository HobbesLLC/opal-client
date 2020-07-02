import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

describe('<App />', () => {
	// create component
	const component = mount(<App />);

	it('renders', () => {
		expect(component.state('activeSlideIndex')).toBe(0);
		expect(component.state('initialSlideIndex')).toBe(0);
	});

	it('runs lifecycle methods', () => {
		const componentInstance = component.instance();
		//Accessing react lifecyle methods
		componentInstance.componentDidMount();
		componentInstance.componentWillUnmount();
	});
});
