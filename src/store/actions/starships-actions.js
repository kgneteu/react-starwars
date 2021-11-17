import {GET_STARSHIP_PAGE, GET_STARSHIPS} from "./types";
import {getSWAPIResourceDataPage, getSWAPIResourceSelectedItems} from "./common";


export function getStarshipPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().starships,
            dispatch: dispatch,
            resourceType: 'starships',
            actionType: GET_STARSHIP_PAGE
        }
        await getSWAPIResourceDataPage(options)
    }
}


export function getStarships(starshipIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().starships,
            dispatch: dispatch,
            resourceType: 'starships',
            actionType: GET_STARSHIPS,
            selectedItems: starshipIds,

        }
        await getSWAPIResourceSelectedItems(options)
    }
}
