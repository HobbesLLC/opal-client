import React from 'react';
import RenderingText from '../Form/RenderingText';
import { mount } from 'enzyme';

describe('<RenderingText />', () => {
	// create component
	const component = mount(<RenderingText />);

	it('renders without crashing', () => {
		mount(<RenderingText />);
	});

	it('runs lifecycle methods', () => {
		const componentInstance = component.instance();
		componentInstance.render();
	});
});
