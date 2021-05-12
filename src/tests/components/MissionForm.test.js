import React from 'react';
import { shallow } from 'enzyme';
import MissionForm from '../../components/MissionForm';
import testMissions from '../fixtures/missions';

test('Should render MissionList with mission', () => {
    const wrapper = shallow(<MissionForm mission={testMissions[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should render MissionForm without missions', () => {
    const wrapper = shallow(<MissionForm />)
    expect(wrapper).toMatchSnapshot();
})

// test('should render error for invalid form submission', () => {
//     const wrapper = shallow(<MissionForm />)
//     wrapper.find('form').simulate('submit', {
//         preventDefault: () => {}
//     })
//     expect(wrapper.state('error').length).toBeGreaterThan(0)
// })

test('should set MissionNameShort on input change', () => {
    const value = 'Test input'
    const wrapper = shallow(<MissionForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input').at(0).simulate('change', {
        target: { value } 
    })
    expect(wrapper.state('MissionNameShort')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set MissionNameFull on input change', () => {
    const value = 'Test input'
    const wrapper = shallow(<MissionForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('textarea').simulate('change', {
        target: { value } 
    })
    expect(wrapper.state('MissionNameFull')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})

test('should set MissionAgencies on input change', () => {
    const value = 'Test input'
    const wrapper = shallow(<MissionForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: { value } 
    })
    expect(wrapper.state('MissionAgencies')).toBe(value)
})

test('should set MissionStatus on input change', () => {
    const value = 'Test input'
    const wrapper = shallow(<MissionForm />)
    wrapper.find('input').at(2).simulate('change', {
        target: { value } 
    })
    expect(wrapper.state('MissionStatus')).toBe(value)
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<MissionForm mission={testMissions[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        MissionID: testMissions[0].mission_id,
        MissionNameShort: testMissions[0].name_short,
        MissionNameFull: testMissions[0].name_full,
        MissionAgencies: testMissions[0].agencies,
        MissionStatus: testMissions[0].status
    })
})