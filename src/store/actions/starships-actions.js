import {GET_STARSHIPS} from "./types";
import {getSWAPIResourceDataPage} from "./common";


export function getStarships() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().starships,
            dispatch: dispatch,
            resourceType: 'starships',
            actionType: GET_STARSHIPS
        }
        await getSWAPIResourceDataPage(options)
    }
}
