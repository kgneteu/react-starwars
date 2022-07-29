import FeaturedBox from "../../featuredBox";
import {getNextFilmDataPage} from "../../../store/films/films.actions";
import {getNextCharacterDataPage} from "../../../store/characters/characters.actions";
import {getNextPlanetDataPage} from "../../../store/planets/planets.actions";
import {getNextStarshipDataPage} from "../../../store/starships/starships.actions";
import {getNextVehicleDataPage} from "../../../store/vehicles/vehicles.actions";
import {getNextSpeciesDataPage} from "../../../store/species/species.actions";
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
