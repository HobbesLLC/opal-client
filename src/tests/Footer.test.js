import React from 'react';
import Footer from '../Footer/Footer';
import { mount } from 'enzyme';

describe('<Footer />', () => {
	// create component
	const component = mount(<Footer />);

	it('renders without crashing', () => {
		mount(<Footer />);
	});

	it('has state', () => {
		expect(component.state('profile')).toBe('grey');
		expect(component.state('expanded')).toBe(false);
		expect(component.state('footerIcon')).toBe(null);
		expect(component.state('footerImage')).toBe('Plus_Icon.svg');
	});

	it('runs lifecycle methods', () => {
		const componentInstance = component.instance();
		//Accessing react lifecyle methods
		componentInstance.openMenu();
		componentInstance.render();
	});
});
