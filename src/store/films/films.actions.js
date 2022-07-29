import {getNextDataPage, getDataItems} from "../utils/api-actions";
import {FilmsAction} from "./films.types";


export function getNextFilmDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: FilmsAction.GET_FILM_PAGE
        }
        await getNextDataPage(options)
    }
}

export function getFilms(filmIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: FilmsAction.GET_FILMS,
            selectedItems: filmIds,

        }
        await getDataItems(options)
    }
}
