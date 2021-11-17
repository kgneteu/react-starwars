import {GET_VEHICLES, VEHICLE_DATA_LOADING} from "./types";
import {getSWAPIResourceDataPage} from "./common";

function setVehicleLoading(loading) {
    return {type: VEHICLE_DATA_LOADING, payload: loading};
}

export function getVehicles() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().vehicles,
            dispatch: dispatch,
            setLoading: setVehicleLoading,
            resourceType: 'vehicles',
            actionType: GET_VEHICLES
        }
        await getSWAPIResourceDataPage(options)
    }
}
