import {getDataItems, getNextDataPage} from "../utils/api.actions";
import {VehiclesActionType} from "./vehicles.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";


export const getNextVehicleDataPage = () => async (dispatch:AppDispatch, getState:AppGetState) => {
    const options = {
        oldState: getState().vehicles,
        dispatch: dispatch,
        resourceType: 'vehicles',
        actionType: VehiclesActionType.GET_VEHICLE_PAGE
    }
    await getNextDataPage(options)
};

export const getVehicles = (vehicleIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().vehicles,
        dispatch: dispatch,
        resourceType: 'vehicles',
        actionType: VehiclesActionType.GET_VEHICLES,
        selectedItems: vehicleIds,

    }
    await getDataItems(options)
};
