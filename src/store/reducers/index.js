import {combineReducers} from "redux";
import heroesReducer from "./heroes-reducer";
import toastsReducer from "./toasts-reducer";
import starshipsReducer from "./starships-reducer";
import filmsReducer from "./films-reducer";
import vehiclesReducer from "./vehicles-reducer";
import speciesReducer from "./species-reducer";
import planetsReducer from "./planets-reducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    heroes: heroesReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    toasts: toastsReducer,
    vehicles: vehiclesReducer,
})

export default rootReducer;
