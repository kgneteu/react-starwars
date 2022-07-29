import {ToastsAction} from "./toasts.types";

export const globalError = (msg) => ({
    type: ToastsAction.GLOBAL_ERROR,
    payload: msg
});

export const globalSuccess = (msg) => ({
    type: ToastsAction.GLOBAL_SUCCESS,
    payload: msg
});

export const clearToast = () => {
    return (dispatch) => {
        dispatch({
            type: ToastsAction.CLEAR_TOAST
        })
    }
}
