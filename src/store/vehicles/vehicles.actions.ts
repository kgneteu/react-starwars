import {getItemsById, getItemsByPage} from "../utils/api.actions";
import {VehiclesActionType} from "./vehicles.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";


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
