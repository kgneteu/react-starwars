import FeaturedBox from "../featuredBox";
import {getFilmPage} from "../../store/actions/films-actions";
import {getCharacterPage} from "../../store/actions/characters-actions";
import {getPlanetPage} from "../../store/actions/planets-actions";
import {getStarshipPage} from "../../store/actions/starships-actions";
import {getVehiclePage} from "../../store/actions/vehicles-actions";
import {getSpeciesPage} from "../../store/actions/species-actions";
import {Layout} from "../layout";




export function Home() {
    return (
        <>

        <Layout>
            <FeaturedBox title={'films'} stateSlice={'films'} getDataAction={getFilmPage}/>
            <FeaturedBox title={'characters'} stateSlice={'characters'} getDataAction={getCharacterPage}/>
            <FeaturedBox title={'planets'} stateSlice={'planets'} getDataAction={getPlanetPage}/>
            <FeaturedBox title={'starships'} stateSlice={'starships'} getDataAction={getStarshipPage}/>
            <FeaturedBox title={'vehicles'} stateSlice={'vehicles'} getDataAction={getVehiclePage}/>
            <FeaturedBox title={'species'} stateSlice={'species'} getDataAction={getSpeciesPage}/>
        </Layout></>)

}
