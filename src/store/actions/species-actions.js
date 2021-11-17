import {GET_SPECIES, GET_SPECIES_PAGE} from "./types";
import {getSWAPIResourceDataPage, getSWAPIResourceSelectedItems} from "./common";


export function getSpeciesPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().species,
            dispatch: dispatch,
            resourceType: 'species',
            actionType: GET_SPECIES_PAGE
        }
        await getSWAPIResourceDataPage(options)
    }
}


export function getSpecies(speciesIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().species,
            dispatch: dispatch,
            resourceType: 'species',
            actionType: GET_SPECIES,
            selectedItems: speciesIds,

        }
        await getSWAPIResourceSelectedItems(options)
    }
}
