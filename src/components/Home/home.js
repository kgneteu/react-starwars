import FeaturedBox from "../featuredBox";
import {getNextFilmDataPage} from "../../store/actions/films-actions";
import {getNextCharacterDataPage} from "../../store/actions/characters-actions";
import {getNextPlanetDataPage} from "../../store/actions/planets-actions";
import {getNextStarshipDataPage} from "../../store/actions/starships-actions";
import {getNextVehicleDataPage} from "../../store/actions/vehicles-actions";
import {getNextSpeciesDataPage} from "../../store/actions/species-actions";
import {Layout} from "../layout";




export function Home() {
    return (
        <>

        <Layout>
            <FeaturedBox title={'films'} stateSlice={'films'} getDataAction={getNextFilmDataPage}/>
            <FeaturedBox title={'characters'} stateSlice={'characters'} getDataAction={getNextCharacterDataPage}/>
            <FeaturedBox title={'planets'} stateSlice={'planets'} getDataAction={getNextPlanetDataPage}/>
            <FeaturedBox title={'starships'} stateSlice={'starships'} getDataAction={getNextStarshipDataPage}/>
            <FeaturedBox title={'vehicles'} stateSlice={'vehicles'} getDataAction={getNextVehicleDataPage}/>
            <FeaturedBox title={'species'} stateSlice={'species'} getDataAction={getNextSpeciesDataPage}/>
        </Layout></>)

}
