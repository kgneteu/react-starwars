import {getNextDataPage, getDataItems} from "../utils/api-actions";
import {PlanetsAction} from "./planets.types";

export function getNextPlanetDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            resourceType: 'planets',
            actionType: PlanetsAction.GET_PLANET_PAGE
        }
        await getNextDataPage(options)
    }
}

export function getPlanets(planetIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            resourceType: 'planets',
            actionType: PlanetsAction.GET_PLANETS,
            selectedItems: planetIds,

        }
        await getDataItems(options)
    }
}
