import React from 'react';
import { connect } from 'react-redux';
import MissionForm from './MissionForm';
import { editMission, removeMission } from '../actions/missions';

export class EditMissionPage extends React.Component {
  onSubmit = (mission) => {
    this.props.editMission(this.props.mission.id, mission);
    this.props.history.push('/');
  }
  onClick = () => {
    this.props.removeMission(this.props.mission.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <MissionForm
          mission = {this.props.mission}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}
        >Delete Mission</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  mission: state.missions.find((mission) => mission.mission_id.toString() === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editMission: (id, mission) => dispatch(editMission(id, mission)),
  removeMission: (id) => dispatch(removeMission({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMissionPage);