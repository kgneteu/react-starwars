import {CharactersAction} from "./character.types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function charactersReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case CharactersAction.GET_CHARACTER_PAGE:
            return {...state, ...action.payload}
        case CharactersAction.GET_CHARACTERS:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
