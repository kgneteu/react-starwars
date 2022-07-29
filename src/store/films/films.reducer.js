import {FilmsAction} from "./films.types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function filmsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case FilmsAction.GET_FILM_PAGE:
            return {...state, ...action.payload}
        case FilmsAction.GET_FILMS:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
