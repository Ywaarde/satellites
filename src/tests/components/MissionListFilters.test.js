import React from 'react';
import { shallow } from 'enzyme';
import { MissionListFilters } from '../../components/MissionListFilters';
import {filters} from '../fixtures/filters';

let setTextFilter, sortByMissionID, sortByMissionShortName, sortByMissionAgencies, sortByMissionStatus, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByMissionID = jest.fn()
    sortByMissionShortName = jest.fn()
    sortByMissionAgencies = jest.fn()
    sortByMissionStatus = jest.fn()
    wrapper = shallow(
        <MissionListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByMissionID={sortByMissionID}
            sortByMissionShortName={sortByMissionShortName}
            sortByMissionAgencies={sortByMissionAgencies}
            sortByMissionStatus={sortByMissionStatus}
        />
    );
});

test('should render MissionListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'Mars'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle selct sort on mission id', () => {
    const value = 'mission_id'
    wrapper.find('select').simulate('change', {target: { value }})
    expect(sortByMissionID).toHaveBeenCalled()
})

test('should handle selct sort on mission short name', () => {
    const value = 'name_short'
    wrapper.find('select').simulate('change', {target: { value }})
    expect(sortByMissionShortName).toHaveBeenCalled()
})

test('should handle selct sort on mission agencies', () => {
    const value = 'agencies'
    wrapper.find('select').simulate('change', {target: { value }})
    expect(sortByMissionAgencies).toHaveBeenCalled()
})

test('should handle selct sort on mission status', () => {
    const value = 'status'
    wrapper.find('select').simulate('change', {target: { value }})
    expect(sortByMissionStatus).toHaveBeenCalled() 
})
