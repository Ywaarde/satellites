import { addMission, editMission, removeMission } from '../../actions/missions'

test('should set up remove mission object', () => {
    const action = removeMission({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_MISSION',
        id: '123abc'
    })
})

test('should set up edit mission object', () => {
    const edits = {
        MissionNameShort: 'testnameshort',
        MissionNameFull: 'testnamefull',
        MissionAgencies: 'testagencies',
        MissionStatus: 'testing'
    }
    const action = editMission('123abc', edits)
    expect(action).toEqual({
        type: 'EDIT_MISSION',
        id: '123abc',
        updates: {
            name_short: 'testnameshort',
            name_full: 'testnamefull',
            agencies: 'testagencies',
            status: 'testing'
        }
    })
})

test('should set up add mission object', () => {
    const missionData = {
        MissionID: 69,
        MissionNameShort: 'testnameshort',
        MissionNameFull: 'testnamefull',
        MissionAgencies: 'testagencies',
        MissionStatus: 'testing'
    }
    const action = addMission(missionData)
    expect(action).toEqual({
        type: 'ADD_MISSION',
        mission:{
            id: expect.any(String),
            mission_id: 69,
            name_short: 'testnameshort',
            name_full: 'testnamefull',
            agencies: 'testagencies',
            status: 'testing'
        }
    })
})

test('should set up add mission object with defaults', () => {
    const action = addMission()
    expect(action).toEqual({
        type: 'ADD_MISSION',
        mission: {
            id: expect.any(String),
            mission_id: '',
            name_short: '',
            name_full: '',
            agencies: '',
            status: ''
        }
    })
})