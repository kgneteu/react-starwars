import {getSWAPIData} from "../../api/swAPI";
import {globalError} from "./toast-actions";

export async function getSWAPIResourceDataPage(options) {
    try {
        const defaultURL = `https://swapi.dev/api/${options.resourceType}/`;
        const oldState = options.oldState;
        if (oldState.items.size === 0 || oldState.items.size < oldState.total) {
            const newState = await getSWAPIData(oldState.next !== '' ? oldState.next : defaultURL)
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

export async function getSWAPIResourceDataItem(options) {
    try {
        const defaultURL = `https://swapi.dev/api/${options.resourceType}/`;
        const oldState = options.oldState;
        if (oldState.items.size === 0 || oldState.items.size < oldState.total) {
            const newState = await getSWAPIData(oldState.next !== '' ? oldState.next : defaultURL)
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
