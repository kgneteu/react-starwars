import {GET_VEHICLES} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
}

export default function vehiclesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_VEHICLES:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
