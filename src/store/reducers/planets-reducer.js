import {GET_PLANETS} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
}

export default function planetsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_PLANETS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
