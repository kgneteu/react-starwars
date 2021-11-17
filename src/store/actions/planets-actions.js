import {getSWAPIResourceDataPage} from "./common";
import {GET_PLANETS} from "./types";

export function getPlanets() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            resourceType: 'planets',
            actionType: GET_PLANETS
        }
        await getSWAPIResourceDataPage(options)
        // /console.log(state)
    }
}
