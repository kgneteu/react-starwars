import {getDataItems, getNextDataPage} from "../utils/api.actions";
import {StarshipsActionType} from "./starships.types";
import {AppDispatch} from "../index";
import {AppGetState} from "../utils/store.utils";


export const getNextStarshipDataPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().starships,
        dispatch: dispatch,
        resourceType: 'starships',
        actionType: StarshipsActionType.GET_STARSHIP_PAGE
    }
    await getNextDataPage(options)
};


export const getStarships = (starshipIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().starships,
        dispatch: dispatch,
        resourceType: 'starships',
        actionType: StarshipsActionType.GET_STARSHIPS,
        selectedItems: starshipIds,
    }
    await getDataItems(options)
};
