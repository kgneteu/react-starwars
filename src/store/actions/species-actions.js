import {GET_SPECIES, SPECIES_DATA_LOADING} from "./types";
import {getSWAPIResourceData} from "./common";

function setSpeciesLoading(loading) {
    return {type: SPECIES_DATA_LOADING, payload: loading};
}

export function getSpecies() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().species,
            dispatch: dispatch,
            setLoading: setSpeciesLoading,
            resourceType: 'species',
            actionType: GET_SPECIES
        }
        await getSWAPIResourceData(options)
    }
}
