import uuid from 'uuid';

// ADD MISSION
export const addMission = (
  {
    MissionID: mission_id = '',
    MissionNameShort: name_short = '',
    MissionNameFull: name_full = '',
    MissionAgencies: agencies = '',
    MissionStatus: status = '',
  } = {}
) => ({
  type: 'ADD_MISSION',
  mission: {
    id: uuid(),
    mission_id,
    name_short,
    name_full,
    agencies,
    status
  }
});

// REMOVE MISSION
export const removeMission = ({ id } = {}) => ({
  type: 'REMOVE_MISSION',
  id
});

// EDIT MISSION
export const editMission = (id, edits) => ({
  type: 'EDIT_MISSION',
  id,
  updates: {
    name_short: edits.MissionNameShort,
    name_full: edits.MissionNameFull,
    agencies: edits.MissionAgencies,
    status: edits.MissionStatus
  }
});