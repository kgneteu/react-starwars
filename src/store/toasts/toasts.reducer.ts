import {ToastsActionType, ToastsState} from "./toasts.types";
import {Reducer} from "redux";
import {ActionWithPayload} from "../utils/store.utils";

const INIT_STATE: ToastsState = {
    error: false,
    success: false,
    msg: '',
}

const toastsReducer: Reducer<ToastsState, ActionWithPayload<ToastsActionType, string>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ToastsActionType.GLOBAL_ERROR:
            return {...state, error: true, msg: action.payload}
        case ToastsActionType.GLOBAL_SUCCESS:
            return {...state, success: true, msg: action.payload}
        case ToastsActionType.CLEAR_TOAST:
            return {...INIT_STATE}
        default:
            return state
    }
};

export default toastsReducer;
