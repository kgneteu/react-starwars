import {GET_STARSHIPS, STARSHIP_DATA_LOADING} from "./types";
import {getSWAPIResourceDataPage} from "./common";

function setStarshipLoading(loading) {
    return {type: STARSHIP_DATA_LOADING, payload: loading};
}

export function getStarships() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().starships,
            dispatch: dispatch,
            setLoading: setStarshipLoading,
            resourceType: 'starships',
            actionType: GET_STARSHIPS
        }
        await getSWAPIResourceDataPage(options)
    }
}
