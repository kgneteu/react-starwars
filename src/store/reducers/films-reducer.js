import {GET_FILMS} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
}

export default function filmsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_FILMS:
            return {...state, ...action.payload}

        default:
            return state;
    }
}
