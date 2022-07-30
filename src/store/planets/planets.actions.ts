import {getDataItems, getNextDataPage} from "../utils/api.actions";
import {PlanetsActionType} from "./planets.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";

export const getNextPlanetDataPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().planets,
        dispatch: dispatch,
        resourceType: 'planets',
        actionType: PlanetsActionType.GET_PLANET_PAGE
    }
    await getNextDataPage(options)
};

export const getPlanets = (planetIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().planets,
        dispatch: dispatch,
        resourceType: 'planets',
        actionType: PlanetsActionType.GET_PLANETS,
        selectedItems: planetIds,

    }
    await getDataItems(options)
};
