import FeaturedBox from "../featuredBox";
import {getFilms} from "../../store/actions/films-actions";
import {getCharacters} from "../../store/actions/characters-actions";
import {getPlanets} from "../../store/actions/planets-actions";
import {getStarships} from "../../store/actions/starships-actions";
import {getVehicles} from "../../store/actions/vehicles-actions";
import {getSpecies} from "../../store/actions/species-actions";
import {Layout} from "../layout";




export function Home() {
    return (
        <>

        <Layout>
            <FeaturedBox title={'films'} stateSlice={'films'} getDataAction={getFilms}/>
            <FeaturedBox title={'characters'} stateSlice={'characters'} getDataAction={getCharacters}/>
            <FeaturedBox title={'planets'} stateSlice={'planets'} getDataAction={getPlanets}/>
            <FeaturedBox title={'starships'} stateSlice={'starships'} getDataAction={getStarships}/>
            <FeaturedBox title={'vehicles'} stateSlice={'vehicles'} getDataAction={getVehicles}/>
            <FeaturedBox title={'species'} stateSlice={'species'} getDataAction={getSpecies}/>
        </Layout></>)

}
