import {CLEAR_TOAST, GLOBAL_ERROR, GLOBAL_SUCCESS} from "./types";

export const globalError = (msg) => ({
    type: GLOBAL_ERROR,
    payload: msg
});

export const globalSuccess = (msg) => ({
    type: GLOBAL_SUCCESS,
    payload: msg
});

export const clearToast = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_TOAST
        })
    }
}
