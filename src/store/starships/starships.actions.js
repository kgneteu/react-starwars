import {getNextDataPage, getDataItems} from "../utils/api-actions";
import {StarshipsAction} from "./starships.types";


export function getNextStarshipDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().starships,
            dispatch: dispatch,
            resourceType: 'starships',
            actionType: StarshipsAction.GET_STARSHIP_PAGE
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
            actionType: StarshipsAction.GET_STARSHIPS,
            selectedItems: starshipIds,

        }
        await getDataItems(options)
    }
}
