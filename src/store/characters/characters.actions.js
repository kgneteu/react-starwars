import {getNextDataPage, getDataItems} from "../utils/api-actions";
import {CharactersAction} from "./character.types";


export function getNextCharacterDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            resourceType: 'people',
            actionType: CharactersAction.GET_CHARACTER_PAGE
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
            actionType: CharactersAction.GET_CHARACTERS,
            selectedItems: charactersIds,

        }
        await getDataItems(options)
    }
}
