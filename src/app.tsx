import StarParallax from "./components/UI/starParallax/starParallax";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Toasts} from "./components/UI/toasts/toasts";
import {Home} from "./components/pages/home/home";
import CategoryPage from "./components/categoryPage";
import {getVehiclesByPage} from "./store/vehicles/vehicles.actions";
import {getFilmsByPage} from "./store/films/films.actions";
import {getCharactersByPage} from "./store/characters/characters.actions";
import {getPlanetsByPage} from "./store/planets/planets.actions";
import {getStarshipsByPage} from "./store/starships/starships.actions";
import {getSpeciesByPage} from "./store/species/species.actions";
import Page404 from "./components/pages/page404/page404";
import FilmPage from "./components/pages/films/filmPage";
import Header from "./components/layout/header/header";
import CharacterPage from "./components/pages/characters/characterPage";
import PlanetPage from "./components/pages/planets/planetPage";
import StarshipPage from "./components/pages/starships/starshipPage";
import SpeciesPage from "./components/pages/species/speciesPage";
import Footer from "./components/layout/footer/footer";
import VehiclePage from "./components/pages/vehicles/vehiclePage";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import React from "react";

const App = () => {
    return (
        <>
            <StarParallax/>
            <Router basename={process.env.PUBLIC_URL}>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/films'} element={<CategoryPage stateSlice={'films'} getDataAction={getFilmsByPage}/>} />
                    <Route path={'/films/:id'} element={<FilmPage/>} />
                    <Route path={'/characters'} element={<CategoryPage stateSlice={'characters'} getDataAction={getCharactersByPage}/>} />
                    <Route path={'/characters/:id'} element={<CharacterPage/>} />
                    <Route path={'/planets'} element={<CategoryPage stateSlice={'planets'} getDataAction={getPlanetsByPage}/>} />
                    <Route path={'/planets/:id'} element={<PlanetPage/>} />
                    <Route path={'/starships'} element={<CategoryPage stateSlice={'starships'} getDataAction={getStarshipsByPage}/>} />
                    <Route path={'/starships/:id'} element={<StarshipPage/>} />
                    <Route path={'/vehicles'} element={<CategoryPage stateSlice={'vehicles'} getDataAction={getVehiclesByPage}/>} />
                    <Route path={'/vehicles/:id'} element={<VehiclePage/>} />
                    <Route path={'/species'} element={<CategoryPage stateSlice={'species'} getDataAction={getSpeciesByPage}/>} />
                    <Route path={'/species/:id'} element={<SpeciesPage/>} />
                    <Route path={'*'} element={<Page404/>} />
                </Routes>
            </Router>
            <Footer/>
            <Toasts/>
        </>
    );
};

export default App;
