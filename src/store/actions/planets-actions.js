import {getSWAPIResourceData} from "./common";
import {GET_PLANETS, PLANET_DATA_LOADING} from "./types";

function setPlanetLoading(loading) {
    return {type: PLANET_DATA_LOADING, payload: loading};
}

export function getPlanets() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            setLoading: setPlanetLoading,
            resourceType: 'planets',
            actionType: GET_PLANETS
        }
        await getSWAPIResourceData(options)
        // /console.log(state)
    }
}
