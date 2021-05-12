import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByMissionID, sortByMissionShortName, sortByMissionAgencies, sortByMissionStatus } from '../actions/filters';

export class MissionListFilters extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = (e) => {
    switch (e.target.value) {
      case 'mission_id':
        this.props.sortByMissionID();
        break;
      case 'name_short':
        this.props.sortByMissionShortName();
        break;
      case 'agencies':
        this.props.sortByMissionAgencies();
        break;
      case 'status':
        this.props.sortByMissionStatus();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <p>Search for 'Mission Name Short'</p>
        <input
          type='text'
          option={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <p>Sort by: </p><select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value='mission_id'>Mission ID</option>
          <option value='name_short'>Mission Name Short</option>
          <option value='agencies'>Mission Agencies</option>
          <option value='status'>Mission Status</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByMissionID: () => dispatch(sortByMissionID()),
  sortByMissionShortName: () => dispatch(sortByMissionShortName()),
  sortByMissionAgencies: () => dispatch(sortByMissionAgencies()),
  sortByMissionStatus: () => dispatch(sortByMissionStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(MissionListFilters);
