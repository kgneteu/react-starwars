import {GET_SPECIES, GET_SPECIES_PAGE} from "../actions/types";

const INIT_STATE = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

export default function speciesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_SPECIES_PAGE:
            return {...state, ...action.payload}
        case GET_SPECIES:
            return {...state, items: action.payload}
        default:
            return state;
    }
}
