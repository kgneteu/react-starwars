import React from "react";

const starWarsAPIModel = {
    birth_year: {
        type: String,
        label: 'Birth year'
    },
    cargo_capacity: {
        type: String,
        label: "Cargo capacity",
    },
    characters: {
        type: Array,
        label: 'Characters'
    },
    consumables: {
        type: String,
        label: "Consumables",
    },
    cost_in_credits: {
        type: String,
        label: "Cost in Credits",
    },
    climate: {
        type: String,
        label: "Climate",
    },
    crew: {
        type: String,
        label: "Crew",
    },
    diameter: {
        type: String,
        label: 'Diameter'
    },
    director: {
        type: String,
        label: 'Director'
    },
    episode_id: {
        type: String,
        label: 'Episode Id'
    },
    eye_color: {
        type: String,
        label: 'Eye color'
    },
    films: {
        type: Array,
        label: 'Films'
    },
    gender: {
        type: String,
        label: 'Gender'
    },
    gravity: {
        type: String,
        label: 'Gravity'
    },
    hair_color: {
        type: String,
        label: 'Hair color'
    },
    height: {
        type: String,
        label: 'Height',
        suffix: "cm",
    },
    hyperdrive_rating: {
        type: String,
        label: 'Hyperdrive rating',
    },
    length: {
        type: String,
        label: 'Length',
    },
    max_atmosphering_speed: {
        type: String,
        label: 'Max speed',
    },
    manufacturer: {
        type: String,
        label: 'Manufacturer',
    },
    mass: {
        type: String,
        label: 'Mass',
        suffix: "kg",
    },
    MGLT: {
        type: String,
        label: 'MGLT',
    },
    model: {
        type: String,
        label: 'Model',
    },
    opening_crawl: {
        type: String,
        label: 'Opening Crawl'
    },
    orbital_period: {
        type: String,
        label: 'Orbital period'
    },
    passengers: {
        type: String,
        label: 'Passengers'
    },
    pilots: {
        type: Array,
        label: 'Pilots'
    },
    planets: {
        type: Array,
        label: 'Planets'
    },
    population: {
        type: String,
        label: 'Population'
    },
    producer: {
        type: String,
        label: 'Producer'
    },
    release_date: {
        type: String,
        label: 'Release date'
    },
    residents: {
        type: Array,
        label: 'Residents'
    },
    rotation_period: {
        type: String,
        label: 'Rotation period',
    },
    skin_color: {
        type: String,
        label: 'Skin color',
    },
    species: {
        type: Array,
        label: 'Species'
    },
    surface_water: {
        type: String,
        label: 'Surface water',
    },
    starships: {
        type: Array,
        label: 'Starships'
    },
    starship_class: {
        type: String,
        label: 'Starship class',
    },
    terrain: {
        type: String,
        label: 'Terrain',
    },
    vehicle_class: {
        type: String,
        label: 'Vehicle class',
    },
    vehicles: {
        type: Array,
        label: 'Vehicles'
    },

}


// <tr>
//     <td>Characters</td>
//     <td>{film.characters.length > 0 && film.characters.map(
//         film => <p className={'max-w-lg'}>{film}</p>
//     )}</td>
// </tr>

//returns table built on SWAPI data
export function formatSWAPIDataTable(data, maxRows = -1, skipArrays = false, skipFields = []) {

    let rows = [];
    for (const key in data) {
        if (starWarsAPIModel[key] !== undefined) {
            if (starWarsAPIModel[key].type === Array) {
                if ((!skipArrays) && (data[key].length > 0)) {
                    rows.push(
                        <tr key={key}>
                            <td>{starWarsAPIModel[key].label}</td>
                            <td>Array</td>
                        </tr>
                    )
                }
            } else {
                const skipProp = ['n/a', 'unknown', 'N/A'];
                if (! (skipProp.includes(data[key]) || skipFields.includes(key))) {
                    rows.push(
                        <tr key={key}>
                            <td className={'w-1/3'}>
                                <div className={'overflow-hidden h-6'}>{starWarsAPIModel[key].label}</div>
                            </td>
                            <td>
                                <div className={'overflow-hidden h-6'}>
                                    <p className={'overflow-ellipsis'}>{data[key].toString()}{starWarsAPIModel[key].suffix}</p>
                                </div>
                            </td>
                        </tr>
                    )
                }
            }
        }
    }


    return (
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}
