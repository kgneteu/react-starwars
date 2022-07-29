import {combineReducers} from "redux";
import charactersReducer from "../characters/characters.reducer";
import toastsReducer from "../toasts/toasts.reducer";
import starshipsReducer from "../starships/starships.reducer";
import filmsReducer from "../films/films.reducer";
import vehiclesReducer from "../vehicles/vehicles.reducer";
import speciesReducer from "../species/species.reducer";
import planetsReducer from "../planets/planets.reducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    characters: charactersReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    toasts: toastsReducer,
    vehicles: vehiclesReducer,
})

export default rootReducer;
