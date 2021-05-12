import React from 'react'
import { shallow } from 'enzyme'
import { Pagination } from '../../components/Pagination'
import testMissions from '../fixtures/missions'
import {altFilters} from '../fixtures/filters'

let onChangePage, wrapper

beforeEach(() => {
    onChangePage = jest.fn()
    wrapper = shallow(
        <Pagination 
            onChangePage={onChangePage} 
            missions={testMissions} 
            filters={altFilters}/>)
})

test('should render pagination correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle page change', () => {
    wrapper.find('button').at(3).simulate('click')
    expect(onChangePage).toHaveBeenLastCalledWith(2)
})