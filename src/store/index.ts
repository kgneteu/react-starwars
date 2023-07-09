import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import filmsReducer from './films/films.reducer';
import charactersReducer from './characters/characters.reducer';
import planetsReducer from './planets/planets.reducer';
import speciesReducer from './species/species.reducer';
import starshipsReducer from './starships/starships.reducer';
import toastsReducer from './toasts/toasts.reducer';
import vehiclesReducer from './vehicles/vehicles.reducer';

const rootReducer = combineReducers({
    films: filmsReducer,
    characters: charactersReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    toasts: toastsReducer,
    vehicles: vehiclesReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancer);

export default store;
