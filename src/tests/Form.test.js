import React from 'react';
import Form from '../Form/Form';
import { mount } from 'enzyme';

describe('<Form />', () => {
	// create component
	const component = mount(<Form />);

	it('renders without crashing', () => {
		mount(<Form />);
	});

	it('has state', () => {
		expect(component.state('previewFile')).toBe(null);
		expect(component.state('isRendering')).toBe(false);
		expect(component.state('doneRendering')).toBe(false);
		expect(component.state('fillBar')).toBe(null);
		expect(component.state('pausedStatus')).toBe(false);
	});

	it('runs lifecycle methods', () => {
		const componentInstance = component.instance();
		//Accessing react lifecyle methods
		componentInstance.componentDidMount();
		componentInstance.hslToLottie();
		componentInstance.hslToHex();
		componentInstance.calculateColor();
		componentInstance.render();
	});
});
