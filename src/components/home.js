import * as PropTypes from "prop-types";
import FeaturedBox2 from "./featuredBox2";
import {getFilms} from "../store/actions/films-actions";
import {getHeroes} from "../store/actions/heroes-actions";
import {getPlanets} from "../store/actions/planets-actions";
import {getStarships} from "../store/actions/starships-actions";
import {getVehicles} from "../store/actions/vehicles-actions";
import {getSpecies} from "../store/actions/species-actions";


const Main = ({children}) => (
    <main className={'flex flex-col items-center'}>
        {children}
    </main>
);

Main.propTypes = {children: PropTypes.node};
export function Home() {
    return (
        <Main>
            <header className={'text-center'}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg'}
                     className={'max-w-lg'} alt={'Logo'}/>
                <h1>Fandom</h1>
            </header>

            <FeaturedBox2 title={'films'} stateSlice={'films'} getDataAction={getFilms}/>
            <FeaturedBox2 title={'characters'} stateSlice={'heroes'} getDataAction={getHeroes}/>
            <FeaturedBox2 title={'planets'} stateSlice={'planets'} getDataAction={getPlanets}/>
            <FeaturedBox2 title={'starships'} stateSlice={'starships'} getDataAction={getStarships}/>
            <FeaturedBox2 title={'vehicles'} stateSlice={'vehicles'} getDataAction={getVehicles}/>
            <FeaturedBox2 title={'species'} stateSlice={'species'} getDataAction={getSpecies}/>
        </Main>)
}
