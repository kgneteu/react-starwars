import { GET_CHARACTERS} from "../actions/types";

const INIT_STATE = {
    total: 0,
    next: '',
    items: new Map(),
}

export default function charactersReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, ...action.payload}
        default:
            return state;
    }
}
