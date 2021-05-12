import { 
    setTextFilter, 
    sortByMissionID, 
    sortByMissionShortName, 
    sortByMissionAgencies, 
    sortByMissionStatus,
    setCurrentPage
} from '../../actions/filters'

test('should set up text filter object', () => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should set up text filter object with defaults', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should set up sort by ID object', () => {
    expect(sortByMissionID()).toEqual({ type: 'SORT_BY_MISSION_ID' })
})

test('should set up sort by Mission Short name object', () => {
    expect(sortByMissionShortName()).toEqual({ type: 'SORT_BY_MISSION_SHORT_NAME' })
})

test('should set up sort by agencies object', () => {
    expect(sortByMissionAgencies()).toEqual({ type: 'SORT_BY_MISSION_AGENCIES' })
})

test('should set up sort by Status object', () => {
    expect(sortByMissionStatus()).toEqual({ type: 'SORT_BY_MISSION_STATUS' })
})

test('should set up a set current page object', () => {
    const action = setCurrentPage(3)
    expect(action).toEqual({
        type: 'SET_PAGE',
        pageNo: 3
    })
})

