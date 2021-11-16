import { GET_CHARACTERS, HERO_DATA_LOADING} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function charactersReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, ...action.payload}
        case HERO_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
