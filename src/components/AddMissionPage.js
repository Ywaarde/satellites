import React from 'react';
import { connect } from 'react-redux';
import MissionForm from './MissionForm';
import { addMission } from '../actions/missions';

export class AddMissionPage extends React.Component {
  onSubmit = (mission) => {
    this.props.addMission(mission);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h3>Add New Mission</h3>
        <MissionForm
          new_id = {this.props.new_id}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const highest_id = state.missions.reduce((prev, current) => (prev.mission_id > current.mission_id) ? prev : current);
  return {
      new_id: highest_id.mission_id + 1
  };
};

const mapDispatchToProps = (dispatch) => ({
  addMission: (mission) => dispatch(addMission(mission))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMissionPage);