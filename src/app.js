import StarParallax from "./components/UI/starParallax/starParallax";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Toasts} from "./components/UI/toasts";
import {Home} from "./components/Home/home";
import CategoryPage from "./components/categoryPage";
import {getVehicles} from "./store/actions/vehicles-actions";
import {getFilms} from "./store/actions/films-actions";
import {getCharacters} from "./store/actions/characters-actions";
import {getPlanets} from "./store/actions/planets-actions";
import {getStarships} from "./store/actions/starships-actions";
import {getSpecies} from "./store/actions/species-actions";
import Page404 from "./components/page404";
import FilmPage from "./components/Films/filmPage";
import {Header} from "./components/header/header";

const App = () => {
    return (
        <>
            <StarParallax/>
            <Router>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>} exact/>
                    <Route path={'films'} element={<CategoryPage stateSlice={'films'} getDataAction={getFilms}/>} />
                    <Route path={'films/:id'} element={<FilmPage/>} />
                    <Route path={'characters'} element={<CategoryPage stateSlice={'characters'} getDataAction={getCharacters}/>} />
                    <Route path={'characters/:id'} element={<CategoryPage stateSlice={'characters'} getDataAction={getCharacters}/>} />
                    <Route path={'planets'} element={<CategoryPage stateSlice={'planets'} getDataAction={getPlanets}/>} />
                    <Route path={'planets/:id'} element={<CategoryPage stateSlice={'planets'} getDataAction={getPlanets}/>} />
                    <Route path={'starships'} element={<CategoryPage stateSlice={'starships'} getDataAction={getStarships}/>} />
                    <Route path={'starships/:id'} element={<CategoryPage stateSlice={'starships'} getDataAction={getStarships}/>} />
                    <Route path={'vehicles'} element={<CategoryPage stateSlice={'vehicles'} getDataAction={getVehicles}/>} />
                    <Route path={'vehicles/:id'} element={<CategoryPage stateSlice={'vehicles'} getDataAction={getVehicles}/>} />
                    <Route path={'species'} element={<CategoryPage stateSlice={'species'} getDataAction={getSpecies}/>} />
                    <Route path={'species/:id'} element={<CategoryPage stateSlice={'species'} getDataAction={getSpecies}/>} />
                    <Route path={'*'} element={<Page404/>}/>} />
                </Routes>
            </Router>
            <Toasts/>
        </>
    );
};

export default App;
