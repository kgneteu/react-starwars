import {PlanetsActionType, PlanetsState} from "./planets.types";
import {Reducer} from "redux";
import {ActionWithPayload} from "../utils/store.utils";

const INIT_STATE: PlanetsState = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

const planetsReducer: Reducer<PlanetsState, ActionWithPayload<PlanetsActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case PlanetsActionType.GET_PLANETS_BY_PAGE:
            return {...state, ...action.payload}
        case PlanetsActionType.GET_PLANETS_BY_ID:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default planetsReducer;
