import {FilmsActionType} from "./films.types";
import {Reducer} from "redux";
import {ActionWithPayload, DataSlice} from "../store.types";

export type FilmsState = DataSlice;

const INIT_STATE:FilmsState = {
    dataEnd: false,
    next: 0,
    items: {},
}

const filmsReducer:Reducer<FilmsState,ActionWithPayload<FilmsActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case FilmsActionType.GET_FILMS_BY_PAGE:
            return {...state, ...action.payload}
        case FilmsActionType.GET_FILMS_BY_ID:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default filmsReducer;
