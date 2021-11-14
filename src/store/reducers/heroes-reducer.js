import { GET_HEROES, HERO_DATA_LOADING} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
    loading: false,
}

export default function heroesReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_HEROES:
            return {...state, ...action.payload}
        case HERO_DATA_LOADING: return {...state, loading: action.payload}
        default:
            return state;
    }
}
