import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCharactersById} from "../store/characters/characters.actions";
import {Loader} from "./UI/loader/loader";
import {PageTitle} from "./UI/pageTitle/pageTitle";
import {CloudImage} from "./UI/cloudImage/cloudImage";
import {formatSWAPIDataTable} from "../utils/swapi.utils";
import {DataBox} from "./dataBox";
import {getFilmsById} from "../store/films/films.actions";
import {getStarshipsById} from "../store/starships/starships.actions";
import {getVehiclesById} from "../store/vehicles/vehicles.actions";
import {getPlanetsById} from "../store/planets/planets.actions";
import {getSpeciesById} from "../store/species/species.actions";
import {AppState} from "../store/constants";

const dataLoader:{[index:string]:any} = {
    films: getFilmsById,
    characters: getCharactersById,
    planets: getPlanetsById,
    species: getSpeciesById,
    starships: getStarshipsById,
    vehicles: getVehiclesById,
}

type Props = {
    id: number,
    stateSlice:string,
}
export function LandingPage({id, stateSlice}:Props) {
    const pageTarget = useSelector((state:AppState) => state[stateSlice].items[id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataLoader[stateSlice]([id]))
    }, [id, dispatch, stateSlice]);

    if (!pageTarget) return <Loader/>

    const caption = pageTarget.title ? pageTarget.title : pageTarget.name;
    return (
        <div>
            <PageTitle title={caption}/>
            <div className={'bg-black bg-opacity-75 py-8'}>
                <div className={'flex container mx-auto gap-x-8 flex-wrap'}>
                    <CloudImage
                        className={'object-cover'}
                        category={stateSlice} imgId={pageTarget.id} preset={'page'}
                        title={caption}
                    />

                <div className={'bg-red'}>
                    {formatSWAPIDataTable(pageTarget, undefined, true, ['opening_crawl'])}
                </div>
                </div>
            </div>
            <div className={'container mx-auto'}>
                <DataBox title={'films'} stateSlice={'films'} items={pageTarget.films} getDataAction={getFilmsById}/>
                <DataBox title={'people'} stateSlice={'characters'} items={pageTarget.people}
                         getDataAction={getCharactersById}/>
                <DataBox title={'pilots'} stateSlice={'characters'} items={pageTarget.pilots}
                         getDataAction={getCharactersById}/>
                <DataBox title={'residents'} stateSlice={'characters'} items={pageTarget.residents}
                         getDataAction={getCharactersById}/>
                <DataBox title={'starships'} stateSlice={'starships'} items={pageTarget.starships}
                         getDataAction={getStarshipsById}/>
                <DataBox title={'vehicles'} stateSlice={'vehicles'} items={pageTarget.vehicles}
                         getDataAction={getVehiclesById}/>
                <DataBox title={'planets'} stateSlice={'planets'} items={pageTarget.planets}
                         getDataAction={getPlanetsById}/>
                <DataBox title={'species'} stateSlice={'species'} items={pageTarget.species}
                         getDataAction={getSpeciesById}/>
            </div>
        </div>
    );
}
