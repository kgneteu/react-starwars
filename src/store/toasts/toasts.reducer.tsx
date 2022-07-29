import {ToastsAction} from "./toasts.types";
import {AnyAction} from "redux";

const INIT_STATE = {
    error: false,
    success: false,
    msg: '',
}

export default function toastsReducer(state = INIT_STATE, action: AnyAction) {
    switch (action.type) {
        case ToastsAction.GLOBAL_ERROR:
            return {...state, error: true, msg: action.payload}
        case ToastsAction.GLOBAL_SUCCESS:
            return {...state, success: true, msg: action.payload}
        case ToastsAction.CLEAR_TOAST:
            return {}
        default:
            return state
    }
}
