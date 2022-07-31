import {SpeciesActionType, SpeciesState} from "./species.types";
import {Reducer} from "redux";
import {ActionWithPayload} from "../utils/store.utils";

const INIT_STATE: SpeciesState = {
    dataEnd: false,
    next: '',
    items: new Map(),
}

const speciesReducer: Reducer<SpeciesState, ActionWithPayload<SpeciesActionType>> = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SpeciesActionType.GET_SPECIES_BY_PAGE:
            return {...state, ...action.payload}
        case SpeciesActionType.GET_SPECIES_BY_ID:
            return {...state, items: action.payload}
        default:
            return state;
    }
};

export default speciesReducer;
