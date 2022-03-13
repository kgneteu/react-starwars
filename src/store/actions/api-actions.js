import {globalError} from "./toast-actions";
import {apiGetDataItem, apiGetDataPage} from "../../api/api";

export async function getNextDataPage(options) {
    try {
        const oldState = options.oldState;
        if (!oldState.dataEnd) {
            const dataPage = await apiGetDataPage(options.resourceType, oldState.next)
            const combinedItems = new Map([...oldState.items, ...dataPage.items])
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

export async function getDataItems(options) {
    try {
        const newItemIds = options.selectedItems.filter(
            (id => !options.oldState.items.has(+id))
        )
        if (newItemIds.length > 0) {
            const newItems = new Map();
            for (let newItemId of newItemIds) {
                const newItem = await apiGetDataItem(options.resourceType, newItemId)
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
