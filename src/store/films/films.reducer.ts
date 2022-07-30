import {FilmsActionType, FilmsState} from "./films.types";
import {Reducer} from "redux";
import {ActionWithPayload} from "../utils/store.utils";

const INIT_STATE:FilmsState = {
    dataEnd: false,
    next: 0,
    items: new Map(),
}

const filmsReducer:Reducer<FilmsState,ActionWithPayload<FilmsActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FilmsActionType.GET_FILM_PAGE:
            return {...state, ...action.payload}
        case FilmsActionType.GET_FILMS:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default filmsReducer;
