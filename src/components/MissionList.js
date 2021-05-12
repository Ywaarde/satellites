import React from 'react';
import { connect } from 'react-redux';
import MissionListItem from './MissionListItem';
import getVisibleMissions from '../selectors/missions';

export const MissionList = (props) => (
  <div>
    <h3>Mission List</h3>
    {props.missions.length === 0 && <p>No missions to display</p>}
    <table>
      <thead>
        <tr>
          <th>Mission ID</th>
          <th>Mission Name Short</th>
          <th>Mission Agencies</th>
          <th>Mission Status</th>
        </tr>
      </thead>
      <tbody>
        {props.missions.map((mission) => (
          <MissionListItem key={mission.id} {...mission}
          />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => {
  return {
    missions: getVisibleMissions(state.missions, state.filters)
  };
};

export default connect(mapStateToProps)(MissionList);

