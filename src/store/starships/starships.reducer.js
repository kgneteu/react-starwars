import {StarshipsAction} from "./starships.types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function starshipsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case StarshipsAction.GET_STARSHIP_PAGE:
            return {...state, ...action.payload}
        case StarshipsAction.GET_STARSHIPS:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
