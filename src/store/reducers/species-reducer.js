import {GET_SPECIES, SPECIES_DATA_LOADING} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function speciesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_SPECIES:
            return {...state, ...action.payload}
        case SPECIES_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
