import {GET_VEHICLE_PAGE, GET_VEHICLES} from "./types";
import {getNextDataPage, getDataItems} from "./api-actions";


export function getNextVehicleDataPage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().vehicles,
            dispatch: dispatch,
            resourceType: 'vehicles',
            actionType: GET_VEHICLE_PAGE
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
            actionType: GET_VEHICLES,
            selectedItems: vehicleIds,

        }
        await getDataItems(options)
    }
}
