import {VehiclesAction} from "./vehicles.types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function vehiclesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case VehiclesAction.GET_VEHICLE_PAGE:
            return {...state, ...action.payload}
        case VehiclesAction.GET_VEHICLES:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
