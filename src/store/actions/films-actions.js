import {GET_FILMS} from "./types";
import {getSWAPIResourceDataPage} from "./common";


export function getFilms() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: GET_FILMS
        }
        await getSWAPIResourceDataPage(options)
    }
}

export function getFilm(filmId) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            resourceType: 'films',
            actionType: GET_FILMS,

        }
        await getSWAPIResourceDataPage(options)
    }
}
