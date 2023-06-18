import {getItemsById, getItemsByPage} from "../utils/api.actions";
import {StarshipsActionType} from "./starships.types";
import {AppDispatch, AppGetState} from "../store.types";


export const getStarshipsByPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().starships,
        dispatch: dispatch,
        resourceType: 'starships',
        actionType: StarshipsActionType.GET_STARSHIPS_BY_PAGE
    }
    await getItemsByPage(options)
};


export const getStarshipsById = (starshipIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().starships,
        dispatch: dispatch,
        resourceType: 'starships',
        actionType: StarshipsActionType.GET_STARSHIPS_BY_ID,
        selectedItems: starshipIds,
    }
    await getItemsById(options)
};
