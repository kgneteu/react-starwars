import {getDataItems, getNextDataPage} from "../utils/api.actions";
import {FilmsActionType} from "./films.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";


export const getNextFilmDataPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().films,
        dispatch: dispatch,
        resourceType: 'films',
        actionType: FilmsActionType.GET_FILM_PAGE
    }
    await getNextDataPage(options)
};

export const getFilms = (filmIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().films,
        dispatch: dispatch,
        resourceType: 'films',
        actionType: FilmsActionType.GET_FILMS,
        selectedItems: filmIds,

    }
    await getDataItems(options)
};
