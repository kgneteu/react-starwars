import axios from "axios";

const FIREBASE_API_URL = process.env.REACT_APP_FIREBASE_API_URL;

export async function apiGetDataPage(resource, next, limit = 10) {
    const offset = next !== '' ? `&startAt=${next + 1}` : '';
    const query = `${FIREBASE_API_URL}${resource}.json/?orderBy="id"${offset}&limitToFirst=${limit}`
    const response = await axios.get(query)
    const items = new Map();
    let lastId = null;
    for (let key in response.data) {
        items.set(response.data[key].id, {...response.data[key], dbId: key})
        lastId = response.data[key].id;
    }
    console.log('Loading Page', items)
    return {
        dataEnd: (items.size < limit),
        next: lastId,
        items
    };
}

const stateSliceToSWAPIResource = {
    films: 'films',
    characters: 'people',
    planets: 'planets',
    species: 'species',
    starships: 'starships',
    vehicles: 'vehicles',
}

export async function apiGetDataItem(stateSlice, id) {
    try {
        const resource = stateSliceToSWAPIResource[stateSlice];
        const query = `${FIREBASE_API_URL}${resource}.json/?orderBy="id"&equalTo=${id}`
        const response = await axios.get(query)

        if (Object.keys(response.data).length !==0) {
            let [key, value] = Object.entries(response.data)[0];
            return {
                ...value, dbId: key
            }
        }
        else {
            return null;
        }

    } catch (e) {
        throw e;
    }
}
