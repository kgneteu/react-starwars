import {StarshipsActionType, StarshipsState} from "./starships.types";
import {Reducer} from "redux";
import {ActionWithPayload} from "../utils/store.utils";

const INIT_STATE: StarshipsState = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

const starshipsReducer: Reducer<StarshipsState, ActionWithPayload<StarshipsActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case StarshipsActionType.GET_STARSHIP_PAGE:
            return {...state, ...action.payload}
        case StarshipsActionType.GET_STARSHIPS:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default starshipsReducer;
