import {FILM_DATA_LOADING, GET_FILMS} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function filmsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_FILMS:
            return {...state, ...action.payload}
        case FILM_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
