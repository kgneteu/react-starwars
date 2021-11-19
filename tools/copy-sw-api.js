//StarWars API moved to Firebase

const axios = require("axios");
const resources = {
    films: "https://swapi.dev/api/films/",
    people: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
    species: "https://swapi.dev/api/species/",
    starships: "https://swapi.dev/api/starships/",
    vehicles: "https://swapi.dev/api/vehicles/"
}

const fb_api = 'https://react-star-wars-84cf7-default-rtdb.europe-west1.firebasedatabase.app/';

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function copyResource(resource, url) {
    let results = [];

    let response = await axios.get(url);
    results = [...response.data.results];
    while (response.data.next) {
        response = await axios.get(response.data.next);
        results = [...results, ...response.data.results];
    }
    for (let result of results) {
        const url = result.url.slice(0, -1);
        const id = url.substring(url.lastIndexOf('/') + 1);
        result.id = +id;
        await axios.post(`${fb_api}/${resource}.json`, result)
    }
    console.log(results)
}

for (const resource in resources) {
    copyResource(resource, resources[resource])
}
