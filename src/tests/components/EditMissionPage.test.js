import React from 'react';
import { shallow } from 'enzyme';
import testMissions from '../fixtures/missions';
import { EditMissionPage } from '../../components/EditMissionPage';

let editMission, removeMission, history, wrapper

beforeEach(() => {
    editMission = jest.fn()
    removeMission = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditMissionPage 
            editMission={editMission} 
            removeMission={removeMission} 
            history={history} 
            mission={testMissions[0]} 
        />
    )
})

test('should render EditMissionPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editMission', () => {
    const editedMission = {
        ...testMissions[0],
        status: 'Different'
    }
    wrapper.find('MissionForm').prop('onSubmit')(wrapper.find('MissionForm').prop('mission'))
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editMission).toHaveBeenLastCalledWith(testMissions[0].id, testMissions[0])
})

test('should handle removeMission', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeMission).toHaveBeenLastCalledWith(testMissions[0].id)
})