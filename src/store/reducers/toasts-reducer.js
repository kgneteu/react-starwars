import {CLEAR_TOAST, GLOBAL_ERROR, GLOBAL_SUCCESS} from "../actions/types";

const INIT_STATE = {
    error: false,
    success: false,
    msg: '',
}

export default function toastsReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GLOBAL_ERROR:
            return {...state, error: true, msg: action.payload}
        case GLOBAL_SUCCESS:
            return {...state, success: true, msg: action.payload}
        case CLEAR_TOAST:
            return {}
        default:
            return state
    }
}
