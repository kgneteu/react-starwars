import {getItemsById, getItemsByPage} from "../utils/api.actions";
import {AppDispatch, AppGetState} from "../store.types";

export const enum VehiclesActionType {
    GET_VEHICLES_BY_PAGE = 'vehicles/GET_VEHICLES_BY_PAGE',
    GET_VEHICLES_BY_ID = 'vehicles/GET_VEHICLES_BY_ID'
}

export const getVehiclesByPage = () => async (dispatch:AppDispatch, getState:AppGetState) => {
    const options = {
        oldState: getState().vehicles,
        dispatch: dispatch,
        resourceType: 'vehicles',
        actionType: VehiclesActionType.GET_VEHICLES_BY_PAGE
    }
    await getItemsByPage(options)
};

export const getVehiclesById = (vehicleIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().vehicles,
        dispatch: dispatch,
        resourceType: 'vehicles',
        actionType: VehiclesActionType.GET_VEHICLES_BY_ID,
        selectedItems: vehicleIds,

    }
    await getItemsById(options)
};
