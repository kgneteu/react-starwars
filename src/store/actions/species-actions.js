import {GET_SPECIES, GET_SPECIES_PAGE} from "./types";
import {getNextDataPage, getSWAPIResourceSelectedItems} from "./common";


export function getNextSpeciesDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().species,
            dispatch: dispatch,
            resourceType: 'species',
            actionType: GET_SPECIES_PAGE
        }
        await getNextDataPage(options)
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
