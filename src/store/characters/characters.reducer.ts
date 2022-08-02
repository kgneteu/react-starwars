import {CharactersActionType} from "./character.types";
import {ActionWithPayload} from "../utils/store.utils";
import {Reducer} from "redux";
import {DataSlice} from "../constants";

export type CharactersState = DataSlice;

const INIT_STATE: CharactersState = {
    dataEnd: false,
    next: 0,
    items: {},
}

const charactersReducer: Reducer<CharactersState, ActionWithPayload<CharactersActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CharactersActionType.GET_CHARACTERS_BY_PAGE:
            return {...state, ...action.payload}
        case CharactersActionType.GET_CHARACTERS_BY_ID:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default charactersReducer;
