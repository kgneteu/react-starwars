import {GET_STARSHIPS} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
}

export default function starshipsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_STARSHIPS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
