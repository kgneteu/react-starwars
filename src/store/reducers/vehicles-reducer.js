import {GET_VEHICLES, VEHICLE_DATA_LOADING} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function vehiclesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_VEHICLES:
            return {...state, ...action.payload}
        case VEHICLE_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
