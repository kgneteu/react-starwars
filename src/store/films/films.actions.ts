import { getItemsById, getItemsByPage } from '../utils/api.actions';
import { FilmsActionType } from './films.types';
import { AppDispatch, AppGetState } from '../store.types';

export const getFilmsByPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().films,
        dispatch: dispatch,
        resourceType: 'films',
        actionType: FilmsActionType.GET_FILMS_BY_PAGE
    };
    await getItemsByPage(options);
};

export const getFilmsById =
    (filmIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: FilmsActionType.GET_FILMS_BY_ID,
            selectedItems: filmIds
        };
        await getItemsById(options);
    };
