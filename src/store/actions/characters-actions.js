import {GET_CHARACTERS, HERO_DATA_LOADING} from "./types";
import {getSWAPIResourceDataPage} from "./common";

function setHeroLoading(loading) {
    return {type: HERO_DATA_LOADING, payload: loading};
}

export function getCharacters() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            setLoading: setHeroLoading,
            resourceType: 'people',
            actionType: GET_CHARACTERS
        }
        await getSWAPIResourceDataPage(options)
    }
}
