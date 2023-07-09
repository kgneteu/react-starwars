import { globalError } from '../toasts/toasts.actions';
import { apiGetItemById, apiGetPageById } from '../../api/api';
import store from '../index';

// export type GetPageOptions<T, P> = {
//     oldState: DataSlice,
//     dispatch: AppDispatch,
//     resourceType: string,
//     actionType: ActionWithPayload<T, P>
// }

export async function getItemsByPage(options) {
    const dispatch = store.dispatch;
    try {
        const oldState = options.oldState;
        if (!oldState.dataEnd) {
            const dataPage = await apiGetPageById(options.resourceType, oldState.next);
            const combinedItems = { ...oldState.items, ...dataPage.items };
            const payload = {
                dataEnd: dataPage.dataEnd,
                next: dataPage.next,
                items: combinedItems
            };

            dispatch({ type: options.actionType, payload });
            return payload;
        }
    } catch (e) {
        if (e instanceof Error) {
            dispatch(globalError(e.message));
        } else {
            dispatch(globalError(String(e)));
        }
    }
}
//
// type GetIdsOptions = {
//     oldState: DataSlice,
//     dispatch: AppDispatch,
//     resourceType: string,
//     actionType: CharactersActionType.GET_CHARACTERS_BY_ID,
//     selectedItems: number[],
// }

export async function getItemsById(options) {
    const dispatch = store.dispatch;
    try {
        const newItemIds = options.selectedItems.filter((id) => !(id in options.oldState.items));
        if (newItemIds.length > 0) {
            const newItems = {};
            for (let newItemId of newItemIds) {
                const newItem = await apiGetItemById(options.resourceType, newItemId);
                if (newItem) newItems[newItem.id] = newItem;
            }
            const payload = { ...options.oldState.items, ...newItems };
            dispatch({ type: options.actionType, payload });
            return payload;
        }
    } catch (e) {
        if (e instanceof Error) {
            dispatch(globalError(e.message));
        } else {
            dispatch(globalError(String(e)));
        }
    }
}
