import { getItemsById, getItemsByPage } from '../utils/api.actions';
import { CharactersActionType } from './character.types';
import { AppDispatch, AppGetState } from '../store.types';

export const getCharactersByPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().characters,
        dispatch: dispatch,
        resourceType: 'people',
        actionType: CharactersActionType.GET_CHARACTERS_BY_PAGE
    };
    await getItemsByPage(options);
};

export const getCharactersById =
    (charactersIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
        const options = {
            oldState: getState().characters,
            dispatch: dispatch,
            resourceType: 'characters',
            actionType: CharactersActionType.GET_CHARACTERS_BY_ID,
            selectedItems: charactersIds
        };
        await getItemsById(options);
    };
