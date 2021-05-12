// Filter reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'mission_id',
    page: 1,
    perPage: 50
  };
  
  const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
      case 'SORT_BY_MISSION_ID':
        return {
          ...state,
          sortBy: 'mission_id'
        };
      case 'SORT_BY_MISSION_SHORT_NAME':
        return {
          ...state,
          sortBy: 'short_name'
        };
      case 'SORT_BY_MISSION_AGENCIES':
        return {
          ...state,
          sortBy: 'agencies'
        };
      case 'SORT_BY_MISSION_STATUS':
        return {
          ...state,
          sortBy: 'status'
        };
      case 'SET_PAGE':
        return {
          ...state,
          page: action.pageNo
        };
      default:
        return state;
    }
  };

  export default filterReducer;