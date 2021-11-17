import {GET_SPECIES} from "./types";
import {getSWAPIResourceDataPage} from "./common";


export function getSpecies() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().species,
            dispatch: dispatch,
            resourceType: 'species',
            actionType: GET_SPECIES
        }
        await getSWAPIResourceDataPage(options)
    }
}
