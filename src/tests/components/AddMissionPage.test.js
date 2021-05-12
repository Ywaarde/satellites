import React from 'react';
import { shallow } from 'enzyme';
import testMissions from '../fixtures/missions';
import { AddMissionPage } from '../../components/AddMissionPage';

let addMission, history, new_id, wrapper

beforeEach(() => {
    addMission = jest.fn()
    history = { push: jest.fn() }
    new_id = 6
    wrapper = shallow(<AddMissionPage addMission={addMission} history={history} new_id={new_id} />)
})

test('should render AddMissionPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('MissionForm').prop('onSubmit')(testMissions[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addMission).toHaveBeenLastCalledWith(testMissions[2])
})