import {getNextDataPage, getDataItems} from "../utils/api-actions";
import {SpeciesAction} from "./species.types";


export function getNextSpeciesDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().species,
            dispatch: dispatch,
            resourceType: 'species',
            actionType: SpeciesAction.GET_SPECIES_PAGE
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
            actionType: SpeciesAction.GET_SPECIES,
            selectedItems: speciesIds,
        }
        await getDataItems(options)
    }
}
