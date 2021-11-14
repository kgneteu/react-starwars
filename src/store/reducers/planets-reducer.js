import {GET_PLANETS, PLANET_DATA_LOADING} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function planetsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_PLANETS:
            return {...state, ...action.payload}
        case PLANET_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
