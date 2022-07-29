import {getNextDataPage, getDataItems} from "../utils/api-actions";
import {VehiclesAction} from "./vehicles.types";


export function getNextVehicleDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().vehicles,
            dispatch: dispatch,
            resourceType: 'vehicles',
            actionType: VehiclesAction.GET_VEHICLE_PAGE
        }
        await getNextDataPage(options)
    }
}

export function getVehicles(vehicleIds) {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().vehicles,
            dispatch: dispatch,
            resourceType: 'vehicles',
            actionType: VehiclesAction.GET_VEHICLES,
            selectedItems: vehicleIds,

        }
        await getDataItems(options)
    }
}
