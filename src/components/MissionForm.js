import React from 'react';

export default class MissionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      MissionID: props.mission ? props.mission.mission_id : props.new_id,
      MissionNameShort: props.mission ? props.mission.name_short : '',
      MissionNameFull: props.mission ? props.mission.name_full : '',
      MissionAgencies: props.mission ? props.mission.agencies : '',
      MissionStatus: props.mission ? props.mission.status : ''
    };
  }

  onShortNameChange = (e) => {
    const MissionNameShort = e.target.value;
    this.setState({ MissionNameShort });
  }

  onFullNameChange = (e) => {
    const MissionNameFull = e.target.value;
    this.setState({ MissionNameFull });
  }

  onAgenciesChange = (e) => {
    const MissionAgencies = e.target.value;
    this.setState({ MissionAgencies });
  }

  onMissionStatusChange = (e) => {
    const MissionStatus = e.target.value;
    this.setState({ MissionStatus });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        {this.props.mission && <h3>Mission ID {this.props.mission.mission_id}</h3>}
        {this.props.new_id && <h3>Mission ID {this.props.new_id}</h3>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Mission Short Name'
            required={true}
            autoFocus
            value={this.state.MissionNameShort}
            onChange={this.onShortNameChange}
          />
          <textarea
            placeholder='Mission Full Name'
            required={true}
            value={this.state.MissionNameFull}
            onChange={this.onFullNameChange}
          >
          </textarea>
          <input
            type='text'
            placeholder='Mission Agencies'
            required={true}
            value={this.state.MissionAgencies}
            onChange={this.onAgenciesChange}
          />
          <input
            type='text'
            placeholder='Mission Status'
            required={true}
            value={this.state.MissionStatus}
            onChange={this.onMissionStatusChange}
          />
          <button>Save Mission</button>
        </form>
      </div>
    );
  }
}

// Full mission details
    // Mission ID*
    // Mission Name Short*
    // Mission Name Full*
    // Mission Agencies*
    // Mission MissionStatus*
    // Launch Date,
    // EOL Date,
    // Applications,
    // Instruments,
    // Instrument IDs,
    // Orbit Type,
    // Orbit Altitude,
    // Orbit Period,
    // Orbit Inclination,
    // Repeat Cycle,
    // Orbit LST,
    // Orbit Longitude,
    // Orbit Sense,
    // Mission Site,
    // Data Access Portal
