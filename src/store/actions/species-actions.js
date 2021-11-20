import {GET_SPECIES, GET_SPECIES_PAGE} from "./types";
import {getNextDataPage, getDataItems} from "./api-actions";


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
        await getDataItems(options)
    }
}
