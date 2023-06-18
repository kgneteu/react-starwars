import {getItemsById, getItemsByPage} from "../utils/api.actions";
import {SpeciesActionType} from "./species.types";
import {AppDispatch, AppGetState} from "../store.types";


export const getSpeciesByPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().species,
        dispatch: dispatch,
        resourceType: 'species',
        actionType: SpeciesActionType.GET_SPECIES_BY_PAGE
    }
    await getItemsByPage(options)
};


export const getSpeciesById = (speciesIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().species,
        dispatch: dispatch,
        resourceType: 'species',
        actionType: SpeciesActionType.GET_SPECIES_BY_ID,
        selectedItems: speciesIds,
    }
    await getItemsById(options)
};
