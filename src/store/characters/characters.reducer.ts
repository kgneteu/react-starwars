import {CharactersActionType, CharactersState} from "./character.types";
import {ActionWithPayload} from "../utils/store.utils";
import {Reducer} from "redux";

const INIT_STATE: CharactersState = {
    dataEnd: false,
    next: '',
    items: new Map(),
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
