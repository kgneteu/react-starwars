import {GET_VEHICLE_PAGE, GET_VEHICLES} from "./types";
import {getSWAPIResourceDataPage, getSWAPIResourceSelectedItems} from "./common";


export function getVehiclePage() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().vehicles,
            dispatch: dispatch,
            resourceType: 'vehicles',
            actionType: GET_VEHICLE_PAGE
        }
        await getSWAPIResourceDataPage(options)
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
        await getSWAPIResourceSelectedItems(options)
    }
}
