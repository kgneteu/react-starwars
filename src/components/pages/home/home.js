import FeaturedBox from "../../featuredBox";
import {getNextFilmDataPage} from "../../../store/actions/films-actions";
import {getNextCharacterDataPage} from "../../../store/actions/characters-actions";
import {getNextPlanetDataPage} from "../../../store/actions/planets-actions";
import {getNextStarshipDataPage} from "../../../store/actions/starships-actions";
import {getNextVehicleDataPage} from "../../../store/actions/vehicles-actions";
import {getNextSpeciesDataPage} from "../../../store/actions/species-actions";
import {Main} from "../../main";


export function Home() {
    return (
        <Main>
            <FeaturedBox title={'films'} stateSlice={'films'} getDataAction={getNextFilmDataPage}/>
            <FeaturedBox title={'characters'} stateSlice={'characters'} getDataAction={getNextCharacterDataPage}/>
            <FeaturedBox title={'starships'} stateSlice={'starships'} getDataAction={getNextStarshipDataPage}/>
            <FeaturedBox title={'vehicles'} stateSlice={'vehicles'} getDataAction={getNextVehicleDataPage}/>
            <FeaturedBox title={'planets'} stateSlice={'planets'} getDataAction={getNextPlanetDataPage}/>
            <FeaturedBox title={'species'} stateSlice={'species'} getDataAction={getNextSpeciesDataPage}/>
        </Main>)

}
