import React from 'react';
import MissionList from './MissionList';
import MissionListFilters from './MissionListFilters';
import Pagination from './Pagination';


const MissionOverviewPage = (props) => (
  <div>
    <h2>Mission Overview</h2>
    <MissionListFilters />
    <MissionList />
    <Pagination />
  </div>
);

export default MissionOverviewPage
