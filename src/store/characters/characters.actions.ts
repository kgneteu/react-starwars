import {getDataItems, getNextDataPage} from "../utils/api.actions";
import {CharactersActionType} from "./character.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";


export const getNextCharacterDataPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().characters,
        dispatch: dispatch,
        resourceType: 'people',
        actionType: CharactersActionType.GET_CHARACTER_PAGE
    }
    await getNextDataPage(options)
};


export const getCharacters = (charactersIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().characters,
        dispatch: dispatch,
        resourceType: 'characters',
        actionType: CharactersActionType.GET_CHARACTERS,
        selectedItems: charactersIds,
    }
    await getDataItems(options)
};
