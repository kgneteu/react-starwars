import {GET_PLANET_PAGE, GET_PLANETS} from "../actions/types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function planetsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_PLANET_PAGE:
            return {...state, ...action.payload}
        case GET_PLANETS:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
