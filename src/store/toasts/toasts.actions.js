import { ToastsActionType } from './toasts.types';

export const globalError = (msg) => ({
    type: ToastsActionType.GLOBAL_ERROR,
    payload: msg
});

export const globalSuccess = (msg) => ({
    type: ToastsActionType.GLOBAL_SUCCESS,
    payload: msg
});

export const clearToast = () => {
    return (dispatch) => {
        dispatch({
            type: ToastsActionType.CLEAR_TOAST
        });
    };
};
