// SET TEXT FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT BY MISSION ID
export const sortByMissionID = () => ({
  type: 'SORT_BY_MISSION_ID'
});

// SORT BY MISSION SHORT NAME
export const sortByMissionShortName = () => ({
  type: 'SORT_BY_MISSION_SHORT_NAME'
});

// SORT BY MISSION AGENCIES
export const sortByMissionAgencies = () => ({
  type: 'SORT_BY_MISSION_AGENCIES'
});

// SORT BY MISSION STATUS
export const sortByMissionStatus = () => ({
  type: 'SORT_BY_MISSION_STATUS'
});

// SET CURRENT PAGE
export const setCurrentPage = (pageNo) => ({
  type: 'SET_PAGE',
  pageNo
});