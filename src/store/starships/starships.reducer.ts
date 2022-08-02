import {StarshipsActionType} from "./starships.types";
import {Reducer} from "redux";
import {ActionWithPayload} from "../utils/store.utils";
import {DataSlice} from "../constants";

export type StarshipsState = DataSlice;

const INIT_STATE: StarshipsState = {
    dataEnd: false,
    next: 0,
    items: {},
}

const starshipsReducer: Reducer<StarshipsState, ActionWithPayload<StarshipsActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case StarshipsActionType.GET_STARSHIPS_BY_PAGE:
            return {...state, ...action.payload}
        case StarshipsActionType.GET_STARSHIPS_BY_ID:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default starshipsReducer;
