import axios from "axios";

//return object with items or string with error message
export async function getSWAPIData(url) {
    try {
        const items = new Map();
        const response = await axios.get(url);
        response.data.results.forEach(item => {
            const url = item.url.slice(0, -1);
            const key = url.substring(url.lastIndexOf('/') + 1);
            item.id = +key;
            items.set(+key, item);
        });
        return {
            total: response.data.count,
            next: response.data.next,
            items: items,
        };
    }  catch(e)    {
        throw e;
    }
}
