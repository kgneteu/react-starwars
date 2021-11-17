import {getSWAPIResourceDataPage, getSWAPIResourceSelectedItems} from "./common";
import {GET_PLANET_PAGE, GET_PLANETS} from "./types";

export function getPlanetPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            resourceType: 'planets',
            actionType: GET_PLANET_PAGE
        }
        await getSWAPIResourceDataPage(options)
        // /console.log(state)
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
        await getSWAPIResourceSelectedItems(options)
    }
}
