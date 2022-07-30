import vehiclesReducer from "./vehicles.reducer";
import {VehiclesActionType, VehiclesState} from "./vehicles.types";

describe(vehiclesReducer.name, () => {

    const testState: VehiclesState = {
        dataEnd: false,
        next: 0,
        items: new Map(),
    }
    //
    // test('should return same state without action', () => {
    //     const actual = vehiclesReducer(testState)
    //     expect(actual).toBe(testState)
    // })

    // test('should return same state without action type', () => {
    //     const actual = vehiclesReducer(testState, {})
    //     expect(actual).toBe(testState)
    // })

    test('should return same state without payload', () => {
        const actual = vehiclesReducer(testState, {type: VehiclesActionType.GET_VEHICLES, payload: undefined})
        expect(actual).toBe(testState)
    })

    // test('should return new state for any known action', () => {
    //     for (const action in Object.keys(VehiclesActionType)){
    //
    //     }
    //     const actual = vehiclesReducer(testState, {type: VehiclesActionType['GET_VEHICLES'], payload: "test"})
    //     expect(actual).toBe(testState)
    // })




    test('should return same state for unknown action', () => {
        const actual = vehiclesReducer(testState, {type: VehiclesActionType['GET_VEHICLES'], payload: "test"})
        expect(actual).toBe(testState)
    })



});
