import {GET_CHARACTER_PAGE, GET_CHARACTERS} from "./types";
import {getSWAPIResourceDataPage, getSWAPIResourceSelectedItems} from "./common";


export function getCharacterPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            resourceType: 'people',
            actionType: GET_CHARACTER_PAGE
        }
        await getSWAPIResourceDataPage(options)
    }
}


export function getCharacters(charactersIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            resourceType: 'characters',
            actionType: GET_CHARACTERS,
            selectedItems: charactersIds,

        }
        await getSWAPIResourceSelectedItems(options)
    }
}
