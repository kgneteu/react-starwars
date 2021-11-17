import {GET_SPECIES} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
}

export default function speciesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_SPECIES:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
