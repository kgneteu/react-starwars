import {GET_STARSHIP_PAGE, GET_STARSHIPS} from "./types";
import {getNextDataPage, getDataItems} from "./api-actions";


export function getNextStarshipDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().starships,
            dispatch: dispatch,
            resourceType: 'starships',
            actionType: GET_STARSHIP_PAGE
        }
        await getNextDataPage(options)
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
        await getDataItems(options)
    }
}
