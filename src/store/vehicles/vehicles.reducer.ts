import {ActionWithPayload} from "../utils/store.utils";
import {Reducer} from "redux";
import {VehiclesActionType} from "./vehicles.actions";
import {DataSlice} from "../constants";


export type VehiclesState =  DataSlice


const INIT_STATE: VehiclesState = {
    dataEnd: false,
    next: 0,
    items: {},
}

const vehiclesReducer: Reducer<VehiclesState, ActionWithPayload<VehiclesActionType>> = (state: VehiclesState = INIT_STATE, action): VehiclesState => {
    switch (action.type) {
        case VehiclesActionType.GET_VEHICLES_BY_PAGE:
            return {...state, ...action.payload}
        case VehiclesActionType.GET_VEHICLES_BY_ID:
            return {...state, items: action.payload}
    }
    return state;
};

export default vehiclesReducer;
