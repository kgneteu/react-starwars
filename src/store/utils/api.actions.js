import {globalError} from "../toasts/toasts.actions";
import {apiGetItemById, apiGetPageById} from "../../api/api";

export async function getItemsByPage(options) {
    try {
        const oldState = options.oldState;
        if (!oldState.dataEnd) {
            const dataPage = await apiGetPageById(options.resourceType, oldState.next)
            const combinedItems = {...oldState.items, ...dataPage.items}
            const payload = {
                dataEnd: dataPage.dataEnd,
                next: dataPage.next,
                items: combinedItems,
            }
            options.dispatch({type: options.actionType, payload})
            return payload;
        }
    } catch (e) {
        options.dispatch(globalError(e.message))
    }
}

export async function getItemsById(options) {
    try {
        const newItemIds = options.selectedItems.filter(
            (id => !options.oldState.items.has(+id))
        )
        if (newItemIds.length > 0) {
            const newItems = new Map();
            for (let newItemId of newItemIds) {
                const newItem = await apiGetItemById(options.resourceType, newItemId)
                if (newItem) newItems.set(newItem.id, newItem);
            }
            const payload = new Map([...options.oldState.items, ...newItems])
            options.dispatch({type: options.actionType, payload})
            return payload;
        }
    } catch (e) {
        console.error(e.message)
        options.dispatch(globalError(e.message))
    }
}
