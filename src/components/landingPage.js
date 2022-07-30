import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCharacters} from "../store/characters/characters.actions";
import {Loader} from "./UI/loader/loader";
import {PageTitle} from "./UI/pageTitle/pageTitle";
import {CloudImage} from "./UI/cloudImage/cloudImage";
import {formatSWAPIDataTable} from "../utils/swapi.utils";
import {DataBox} from "./dataBox";
import {getFilms} from "../store/films/films.actions";
import {getStarships} from "../store/starships/starships.actions";
import {getVehicles} from "../store/vehicles/vehicles.actions";
import {getPlanets} from "../store/planets/planets.actions";
import {getSpecies} from "../store/species/species.actions";

const dataLoader = {
    films: getFilms,
    characters: getCharacters,
    planets: getPlanets,
    species: getSpecies,
    starships: getStarships,
    vehicles: getVehicles,
}

export function LandingPage({id, stateSlice}) {
    const pageTarget = useSelector(state => state[stateSlice].items.get(id));
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
                <DataBox title={'films'} stateSlice={'films'} items={pageTarget.films} getDataAction={getFilms}/>
                <DataBox title={'people'} stateSlice={'characters'} items={pageTarget.people}
                         getDataAction={getCharacters}/>
                <DataBox title={'pilots'} stateSlice={'characters'} items={pageTarget.pilots}
                         getDataAction={getCharacters}/>
                <DataBox title={'residents'} stateSlice={'characters'} items={pageTarget.residents}
                         getDataAction={getCharacters}/>
                <DataBox title={'starships'} stateSlice={'starships'} items={pageTarget.starships}
                         getDataAction={getStarships}/>
                <DataBox title={'vehicles'} stateSlice={'vehicles'} items={pageTarget.vehicles}
                         getDataAction={getVehicles}/>
                <DataBox title={'planets'} stateSlice={'planets'} items={pageTarget.planets}
                         getDataAction={getPlanets}/>
                <DataBox title={'species'} stateSlice={'species'} items={pageTarget.species}
                         getDataAction={getSpecies}/>
            </div>
        </div>
    );
}
