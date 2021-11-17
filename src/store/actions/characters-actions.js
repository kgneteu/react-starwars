import {GET_CHARACTERS} from "./types";
import {getSWAPIResourceDataPage} from "./common";


export function getCharacters() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            resourceType: 'people',
            actionType: GET_CHARACTERS
        }
        await getSWAPIResourceDataPage(options)
    }
}
