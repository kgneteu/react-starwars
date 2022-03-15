import StarParallax from "./components/UI/starParallax/starParallax";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Toasts} from "./components/UI/toasts/toasts";
import {Home} from "./components/home/home";
import CategoryPage from "./components/categoryPage";
import {getNextVehicleDataPage} from "./store/actions/vehicles-actions";
import {getNextFilmDataPage} from "./store/actions/films-actions";
import {getNextCharacterDataPage} from "./store/actions/characters-actions";
import {getNextPlanetDataPage} from "./store/actions/planets-actions";
import {getNextStarshipDataPage} from "./store/actions/starships-actions";
import {getNextSpeciesDataPage} from "./store/actions/species-actions";
import Page404 from "./components/page404";
import FilmPage from "./components/films/filmPage";
import Header from "./components/header/header";
import CharacterPage from "./components/characters/characterPage";
import PlanetPage from "./components/planets/planetPage";
import StarshipPage from "./components/starships/starshipPage";
import SpeciesPage from "./components/species/speciesPage";
import Footer from "./components/footer/footer";
import VehiclePage from "./components/vehicles/vehiclePage";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

const App = () => {
    return (
        <>
            <StarParallax/>
            <Router basename={process.env.PUBLIC_URL}>
                <Header/>
                <ScrollToTop/>
                <Routes>
                    <Route path={'/'} element={<Home/>} exact/>
                    <Route path={'/films'} element={<CategoryPage stateSlice={'films'} getDataAction={getNextFilmDataPage}/>} />
                    <Route path={'/films/:id'} element={<FilmPage/>} />
                    <Route path={'/characters'} element={<CategoryPage stateSlice={'characters'} getDataAction={getNextCharacterDataPage}/>} />
                    <Route path={'/characters/:id'} element={<CharacterPage/>} />
                    <Route path={'/planets'} element={<CategoryPage stateSlice={'planets'} getDataAction={getNextPlanetDataPage}/>} />
                    <Route path={'/planets/:id'} element={<PlanetPage/>} />
                    <Route path={'/starships'} element={<CategoryPage stateSlice={'starships'} getDataAction={getNextStarshipDataPage}/>} />
                    <Route path={'/starships/:id'} element={<StarshipPage/>} />
                    <Route path={'/vehicles'} element={<CategoryPage stateSlice={'vehicles'} getDataAction={getNextVehicleDataPage}/>} />
                    <Route path={'/vehicles/:id'} element={<VehiclePage/>} />
                    <Route path={'/species'} element={<CategoryPage stateSlice={'species'} getDataAction={getNextSpeciesDataPage}/>} />
                    <Route path={'/species/:id'} element={<SpeciesPage/>} />
                    <Route path={'*'} element={<Page404/>}/>} />
                </Routes>
            </Router>
            <Footer/>
            <Toasts/>
        </>
    );
};

export default App;
