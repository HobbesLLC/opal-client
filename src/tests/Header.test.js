import React from 'react';
import Header from '../Header/Header';
import { mount } from 'enzyme';

describe('<Header />', () => {
	it('renders without crashing', () => {
		mount(<Header />);
	});

	it('runs lifecycle methods', () => {
		// create component
		const component = mount(<Header />);
		const componentInstance = component.instance();
		componentInstance.render();
	});
});
