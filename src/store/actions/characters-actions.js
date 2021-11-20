import {GET_CHARACTER_PAGE, GET_CHARACTERS} from "./types";
import {getNextDataPage, getDataItems} from "./api-actions";


export function getNextCharacterDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            resourceType: 'people',
            actionType: GET_CHARACTER_PAGE
        }
        await getNextDataPage(options)
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
        await getDataItems(options)
    }
}
