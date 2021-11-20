import {getNextDataPage, getDataItems} from "./api-actions";
import {GET_PLANET_PAGE, GET_PLANETS} from "./types";

export function getNextPlanetDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            resourceType: 'planets',
            actionType: GET_PLANET_PAGE
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
            actionType: GET_PLANETS,
            selectedItems: planetIds,

        }
        await getDataItems(options)
    }
}
