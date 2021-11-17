import {FILM_DATA_LOADING, GET_FILMS} from "./types";
import {getSWAPIResourceDataPage} from "./common";

function setFilmLoading(loading) {
    return {type: FILM_DATA_LOADING, payload: loading};
}

export function getFilms() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().films,
            dispatch: dispatch,
            setLoading: setFilmLoading,
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
            setLoading: setFilmLoading,
            resourceType: 'films',
            actionType: GET_FILMS,

        }
        await getSWAPIResourceDataPage(options)
    }
}
