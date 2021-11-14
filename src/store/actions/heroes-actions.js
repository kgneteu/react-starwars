import {GET_HEROES, HERO_DATA_LOADING} from "./types";
import {getSWAPIResourceData} from "./common";

function setHeroLoading(loading) {
    return {type: HERO_DATA_LOADING, payload: loading};
}

export function getHeroes() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().heroes,
            dispatch: dispatch,
            setLoading: setHeroLoading,
            resourceType: 'people',
            actionType: GET_HEROES
        }
        await getSWAPIResourceData(options)
    }
}
