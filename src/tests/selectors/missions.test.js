import getVisibleMissions from '../../selectors/missions';
import testMissions from '../fixtures/missions';

test('should filter by text value', () => {
    const filters = {
        text: 'a',
        sortBy: 'id',
        page: 1,
        perPage: 50
    };
    const results = getVisibleMissions(testMissions, filters);
    expect(results).toEqual([testMissions[0], testMissions[2]]);
});

test('should sort by mission short name', () => {
    const filters = {
        text: '',
        sortBy: 'name_short',
        page: 1,
        perPage: 50
    };
    const results = getVisibleMissions(testMissions, filters);
    expect(results).toEqual([testMissions[2], testMissions[0], testMissions[1]]);
});

test('should sort by mission status', () => {
    const filters = {
        text: '',
        sortBy: 'agencies',
        page: 1,
        perPage: 50
    };
    const results = getVisibleMissions(testMissions, filters);
    expect(results).toEqual([testMissions[1], testMissions[2], testMissions[0]]);
});

test('should sort by mission status', () => {
    const filters = {
        text: '',
        sortBy: 'status',
        page: 1,
        perPage: 50
    };
    const results = getVisibleMissions(testMissions, filters);
    expect(results).toEqual([testMissions[0], testMissions[2], testMissions[1]]);
});

test('should return page 2 of missions', () => {
    const filters = {
        text: '',
        sortBy: 'id',
        page: 2,
        perPage: 2
    };
    const results = getVisibleMissions(testMissions, filters);
    expect(results).toEqual([testMissions[2]]);
})