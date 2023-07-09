export const enum ToastsActionType {
    GLOBAL_SUCCESS = 'toasts/GLOBAL_SUCCESS',
    GLOBAL_ERROR = 'toasts/GLOBAL_ERROR',
    CLEAR_TOAST = 'toasts/CLEAR_TOAST'
}

export type ToastsState = {
    error: boolean;
    success: boolean;
    msg: string;
};
