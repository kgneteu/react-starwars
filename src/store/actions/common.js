import {getSWAPIDataItem, getSWAPIDataPage} from "../../api/swAPI";
import {globalError} from "./toast-actions";

export async function getSWAPIResourceDataPage(options) {
    try {
        const defaultURL = `https://swapi.dev/api/${options.resourceType}/`;
        const oldState = options.oldState;
        if (oldState.total === 0 || oldState.items.size < oldState.total) {
            const newState = await getSWAPIDataPage(oldState.next !== '' ? oldState.next : defaultURL)
            const newItems = new Map([...oldState.items, ...newState.items])
            const payload = {
                total: newState.total,
                next: newState.next,
                items: newItems,
            }
            options.dispatch({type: options.actionType, payload})
            return payload;
        }
    } catch (e) {
        options.dispatch(globalError(e.message))
    }
}

export async function getSWAPIResourceSelectedItems(options) {
    try {
        const newItemList = options.selectedItems.filter(
            (id => !options.oldState.items.has(id))
        )
        if (newItemList.length > 0) {
            const newItems = new Map();
            for (let newItemId of newItemList) {
                newItems.set(newItemId, await getSWAPIDataItem(options.resourceType, newItemId));
            }
            const payload = new Map([...options.oldState.items, ...newItems])
            options.dispatch({type: options.actionType, payload})
            return payload;
        }
    } catch (e) {
        options.dispatch(globalError(e.message))
    }
}
