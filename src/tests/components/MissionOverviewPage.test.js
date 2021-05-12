import React from 'react';
import { shallow } from 'enzyme';
import MissionOverviewPage from '../../components/MissionOverviewPage'
import testMissions from '../fixtures/missions';
import testFilters from '../fixtures/filters'

let wrapper

beforeEach(() => {
    const wrapper = shallow(<MissionOverviewPage missions={testMissions} filters={testFilters}/>);
})

test('should render the MissionOverviewPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})