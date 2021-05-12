// Mission reducer

const missionReducerDefaultState = [];

const missionReducer = (state = missionReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MISSION':
      return [
        ...state,
        action.mission
      ];
    case 'REMOVE_MISSION':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_MISSION':
      return state.map((mission) => {
        if (mission.id === action.id) {
          return {
            ...mission,
            ...action.updates
          };
        } else {
          return mission;
        };
      });
    default:
      return state;
  }
};

export default missionReducer;