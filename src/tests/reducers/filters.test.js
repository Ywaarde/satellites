import filterReducers from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'mission_id',
        page: 1,
        perPage: 50
    })
})

test('should set text filter', () => {
    const state = filterReducers(undefined, { type: 'SET_TEXT_FILTER', text: 'test text' })
    expect(state.text).toBe('test text')
})

test('should set sortBy to mission id', () => {
    const currentState = {
        text: '',
        sortBy: 'status',
        page: 1,
        perPage: 50
    }
    const action = { type: 'SORT_BY_MISSION_ID' }
    const state = filterReducers(currentState, action)
    expect(state.sortBy).toBe('mission_id')
})

test('should set sortBy to mission name short', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_MISSION_SHORT_NAME'})
    expect(state.sortBy).toBe('short_name')
})

test('should set sortBy to mission agencies', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_MISSION_AGENCIES'})
    expect(state.sortBy).toBe('agencies')
})

test('should set sortBy to mission status', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_MISSION_STATUS'})
    expect(state.sortBy).toBe('status')
})

test('should set page number', () => {
    const state = filterReducers(undefined, { type: 'SET_PAGE', pageNo: 3 })
    expect(state.page).toBe(3)
})