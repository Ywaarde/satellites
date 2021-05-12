import missionReducer from '../../reducers/missions'
import testMissions from '../fixtures/missions';

test('should set up default state', () => {
    const state = missionReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should add misson', () => {
    const newMission = {
        id: '123abc',
        mission_id: 1,
        mission_name_short: 'Test mission name',
        agencies: 'Test agency',
        status: 'testing'
    }
    const action = {
        type: 'ADD_MISSION', 
        mission: newMission
    }
    const state = missionReducer(testMissions, action)
    expect(state).toEqual([...testMissions, newMission])
})

test('should remove mission by id', () => {
    const action = {
        type: 'REMOVE_MISSION',
        id: testMissions[1].id
    }
    const state = missionReducer(testMissions, action)
    expect(state).toEqual([testMissions[0], testMissions[2]])
})

test('should not remove any mission if id not found', () => {
    const action = {
        type: 'REMOVE_MISSION',
        id: 'n0tfound'
    }
    const state = missionReducer(testMissions, action)
    expect(state).toEqual(testMissions)
})

test('should edit mission by id', () => {
    const action = {
        type: 'EDIT_MISSION',
        id: testMissions[0].id,
        updates: {
            status: 'Passed testing'
        }
    }
    const state = missionReducer(testMissions, action)
    expect(state).toEqual([{
        ...testMissions[0],
        ...action.updates
    },
    testMissions[1], 
    testMissions[2]   
    ])
})

test('should not edit any mission if id not found', () => {
    const action = {
        type: 'EDIT_MISSION',
        id: 'n0tFound',
        updates: {
            status: 'Passed testing'
        }
    }
    const state = missionReducer(testMissions, action)
    expect(state).toEqual(testMissions)
})
