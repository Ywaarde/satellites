import React from 'react';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
import Header from '../../components/Header'

test('should render the header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Satellites');
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

