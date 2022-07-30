import {getDataItems, getNextDataPage} from "../utils/api.actions";
import {SpeciesActionType} from "./species.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";


export const getNextSpeciesDataPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().species,
        dispatch: dispatch,
        resourceType: 'species',
        actionType: SpeciesActionType.GET_SPECIES_PAGE
    }
    await getNextDataPage(options)
};


export const getSpecies = (speciesIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().species,
        dispatch: dispatch,
        resourceType: 'species',
        actionType: SpeciesActionType.GET_SPECIES,
        selectedItems: speciesIds,
    }
    await getDataItems(options)
};
