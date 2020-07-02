import React from 'react';
import App from '../App';
import { mount } from 'enzyme';

describe('<App />', () => {
	// create component
	const component = mount(<App />);

	it('renders without crashing', () => {
		mount(<App />);
	});

	it('runs lifecycle methods', () => {
		const componentInstance = component.instance();
		//Accessing react lifecyle methods
		componentInstance.componentDidMount();
		componentInstance.render();
	});
});
