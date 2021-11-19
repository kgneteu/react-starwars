import {GET_VEHICLE_PAGE, GET_VEHICLES} from "../actions/types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function vehiclesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_VEHICLE_PAGE:
            return {...state, ...action.payload}
        case GET_VEHICLES:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
