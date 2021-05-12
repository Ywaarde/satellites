import React from 'react';
import { shallow } from 'enzyme';
import MissionListItem from '../../components/MissionListItem';
import testMissions from '../fixtures/missions';

test('Should render a MissionListItem with mission details', () => {
    const wrapper = shallow(<MissionListItem {...testMissions[0]} />)
    expect(wrapper).toMatchSnapshot();
})