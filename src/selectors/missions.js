const getVisibleMissions = (missions, { text, sortBy, page, perPage }) => {
  return missions.filter((mission) => {
    return mission.name_short.toLowerCase().includes(text.toLowerCase());
  }).sort((a, b) => {
    switch (sortBy) {
      case 'mission_id':
        return a.mission_id > b.mission_id ? 1 : -1;
      case 'name_short':
        return a.name_short > b.name_short ? 1 : -1;
      case 'agencies':
        return a.agencies > b.agencies ? 1 : -1;
      case 'status':
        return a.status > b.status ? 1 : -1;
      default:
        return 1;
    }
  }).slice(
    ((page-1)*perPage),
    (perPage*page)
  );
};

export default getVisibleMissions;