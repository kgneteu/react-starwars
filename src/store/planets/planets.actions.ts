import { getItemsById, getItemsByPage } from '../utils/api.actions';
import { PlanetsActionType } from './planets.types';
import { AppDispatch, AppGetState } from '../store.types';

export const getPlanetsByPage = () => async (dispatch: AppDispatch, getState: AppGetState) => {
    const options = {
        oldState: getState().planets,
        dispatch: dispatch,
        resourceType: 'planets',
        actionType: PlanetsActionType.GET_PLANETS_BY_PAGE
    };
    await getItemsByPage(options);
};

export const getPlanetsById =
    (planetIds: number[]) => async (dispatch: AppDispatch, getState: AppGetState) => {
        const options = {
            oldState: getState().planets,
            dispatch: dispatch,
            resourceType: 'planets',
            actionType: PlanetsActionType.GET_PLANETS_BY_ID,
            selectedItems: planetIds
        };
        await getItemsById(options);
    };
