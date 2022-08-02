import {AppState} from "../constants";

export type ActionWithPayload<T, P = any> = {
    type: T,
    payload: P
}

export type AppGetState = () => AppState;
