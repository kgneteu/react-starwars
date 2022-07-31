import {VehiclesActionType, VehiclesState} from "./vehicles.types";
import {ActionWithPayload} from "../utils/store.utils";
import {Action, AnyAction} from "redux";

const INIT_STATE: VehiclesState = {
    dataEnd: false,
    next: 0,
    items: new Map(),
}

export type Reducer<S, A extends Action = AnyAction> = (
    state: S | undefined,
    action: A
) => S

const vehiclesReducer: Reducer<VehiclesState, ActionWithPayload<VehiclesActionType>> = (state: VehiclesState = INIT_STATE, action):VehiclesState => {
    switch (action.type) {
        case VehiclesActionType.GET_VEHICLES_BY_PAGE:
            return {...state, ...action.payload}
        case VehiclesActionType.GET_VEHICLES_BY_ID:
            return {...state, items: action.payload}
    }
    return state;
};

export default vehiclesReducer;
