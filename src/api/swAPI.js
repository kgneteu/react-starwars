import axios from "axios";
//const fb_api = 'https://react-star-wars-84cf7-default-rtdb.europe-west1.firebasedatabase.app/';
//return object with items or string with error message
// export async function getSWAPIDataPage(url) {
//     try {
//         const items = new Map();
//         const response = await axios.get(url);
//         response.data.results.forEach(item => {
//             const url = item.url.slice(0, -1);
//             const key = url.substring(url.lastIndexOf('/') + 1);
//             item.id = String(key);
//             items.set(item.id, item);
//         });
//         return {
//             total: response.data.count,
//             next: response.data.next,
//             items: items,
//         };
//     } catch (e) {
//         throw e;
//     }
// }
//
// const stateSliceToSWAPIResource = {
//     films: 'films',
//     characters: 'people',
//     planets: 'planets',
//     species: 'species',
//     starships: 'starships',
//     vehicles: 'vehicles',
// }
//
// export async function getSWAPIDataItem(stateSlice, id) {
//     try {
//         const resource = stateSliceToSWAPIResource[stateSlice];
//         const response = await axios.get(`https://swapi.dev/api/${resource}/${id}`);
//         response.data.id = String(id);
//         return response.data;
//     } catch (e) {
//         throw e;
//     }
// }
