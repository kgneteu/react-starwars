import {RootState} from "../index";

export type ActionWithPayload<T, P = any> = {
    type: T,
    payload: P
}

export type AppGetState = () => RootState;
