import vehiclesReducer, { VehiclesState } from './vehicles.reducer';
import { VehiclesActionType } from './vehicles.actions';

describe(vehiclesReducer.name, () => {
    const testState: VehiclesState = {
        dataEnd: false,
        next: 0,
        items: {}
    };

    // test('should return initial state', () => {
    //     const actual = vehiclesReducer(undefined, {});
    //     expect(actual).toEqual(testState);
    // });
    //
    // test('should return same state object for unknown action', () => {
    //     const actual = vehiclesReducer(testState, { type: 'test' });
    //     expect(actual).toBe(testState);
    // });

    test('should handle vehicles/GET_VEHICLES_BY_ID', () => {
        const actual = vehiclesReducer(testState, {
            type: VehiclesActionType.GET_VEHICLES_BY_ID,
            payload: 'test'
        });
        expect(actual).toEqual({ ...testState, items: 'test' });
    });

    test('should handle vehicles/GET_VEHICLES_BY_PAGE', () => {
        const actual = vehiclesReducer(testState, {
            type: VehiclesActionType.GET_VEHICLES_BY_PAGE,
            payload: { test: 'test' }
        });
        expect(actual).toEqual({ ...testState, test: 'test' });
    });
});
