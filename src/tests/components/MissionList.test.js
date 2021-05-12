import React from 'react';
import { shallow } from 'enzyme';
import { MissionList } from '../../components/MissionList';
import testMissions from '../fixtures/missions';

test('Should render MissionList with missions', () => {
    const wrapper = shallow(<MissionList missions={testMissions}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should render MissionList without missions', () => {
    const wrapper = shallow(<MissionList missions={[]}/>)
    expect(wrapper).toMatchSnapshot();
})