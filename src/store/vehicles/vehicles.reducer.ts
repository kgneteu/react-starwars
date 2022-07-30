import {VehiclesActionType, VehiclesState} from "./vehicles.types";
import {ActionWithPayload} from "../utils/store.utils";
import {Reducer} from "redux";

const INIT_STATE: VehiclesState = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

const vehiclesReducer: Reducer<VehiclesState, ActionWithPayload<VehiclesActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case VehiclesActionType.GET_VEHICLE_PAGE:
            return {...state, ...action.payload}
        case VehiclesActionType.GET_VEHICLES:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default vehiclesReducer;
