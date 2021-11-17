import StarParallax from "./components/UI/starParallax/starParallax";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Toasts} from "./components/UI/toasts";
import {Home} from "./components/Home/home";
import CategoryPage from "./components/categoryPage";
import {getVehiclePage} from "./store/actions/vehicles-actions";
import {getFilmPage} from "./store/actions/films-actions";
import {getCharacterPage} from "./store/actions/characters-actions";
import {getPlanetPage} from "./store/actions/planets-actions";
import {getStarshipPage} from "./store/actions/starships-actions";
import {getSpeciesPage} from "./store/actions/species-actions";
import Page404 from "./components/page404";
import FilmPage from "./components/Films/filmPage";
import Header from "./components/header/header";
import CharacterPage from "./components/Characters/characterPage";


const App = () => {
    return (
        <>
            <StarParallax/>
            <Router basename={process.env.PUBLIC_URL}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Home/>} exact/>
                    <Route path={'/films'} element={<CategoryPage stateSlice={'films'} getDataAction={getFilmPage}/>} />
                    <Route path={'/films/:id'} element={<FilmPage/>} />
                    <Route path={'/characters'} element={<CategoryPage stateSlice={'characters'} getDataAction={getCharacterPage}/>} />
                    <Route path={'/characters/:id'} element={<CharacterPage/>} />
                    <Route path={'/planets'} element={<CategoryPage stateSlice={'planets'} getDataAction={getPlanetPage}/>} />
                    <Route path={'/planets/:id'} element={<CategoryPage stateSlice={'planets'} getDataAction={getPlanetPage}/>} />
                    <Route path={'/starships'} element={<CategoryPage stateSlice={'starships'} getDataAction={getStarshipPage}/>} />
                    <Route path={'/starships/:id'} element={<CategoryPage stateSlice={'starships'} getDataAction={getStarshipPage}/>} />
                    <Route path={'/vehicles'} element={<CategoryPage stateSlice={'vehicles'} getDataAction={getVehiclePage}/>} />
                    <Route path={'/vehicles/:id'} element={<CategoryPage stateSlice={'vehicles'} getDataAction={getVehiclePage}/>} />
                    <Route path={'/species'} element={<CategoryPage stateSlice={'species'} getDataAction={getSpeciesPage}/>} />
                    <Route path={'/species/:id'} element={<CategoryPage stateSlice={'species'} getDataAction={getSpeciesPage}/>} />
                    <Route path={'*'} element={<Page404/>}/>} />
                </Routes>
            </Router>
            <Toasts/>
        </>
    );
};

export default App;
