import {GET_FILM_PAGE, GET_FILMS} from "./types";
import {getSWAPIResourceDataPage, getSWAPIResourceSelectedItems} from "./common";


export function getFilmPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: GET_FILM_PAGE
        }
        await getSWAPIResourceDataPage(options)
    }
}

export function getFilms(filmIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: GET_FILMS,
            selectedItems: filmIds,

        }
        await getSWAPIResourceSelectedItems(options)
    }
}
