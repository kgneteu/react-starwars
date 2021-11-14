import {GET_STARSHIPS, STARSHIP_DATA_LOADING} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function starshipsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_STARSHIPS:
            return {...state, ...action.payload}
        case STARSHIP_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
