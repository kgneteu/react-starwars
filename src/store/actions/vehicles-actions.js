import {GET_VEHICLES} from "./types";
import {getSWAPIResourceDataPage} from "./common";


export function getVehicles() {
    return async (dispatch, getState) => {
        const options = {
            oldState: getState().vehicles,
            dispatch: dispatch,
            resourceType: 'vehicles',
            actionType: GET_VEHICLES
        }
        await getSWAPIResourceDataPage(options)
    }
}
