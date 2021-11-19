import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCharacters} from "../store/actions/characters-actions";
import {Loader} from "./UI/loader/loader";
import {PageTitle} from "./pageTitle";
import {CloudImage} from "./cloudImage";
import {formatSWAPIDataTable} from "../utils/swapi";
import {DataBox} from "./dataBox";
import {getFilms} from "../store/actions/films-actions";
import {getStarships} from "../store/actions/starships-actions";
import {getVehicles} from "../store/actions/vehicles-actions";
import {getPlanets} from "../store/actions/planets-actions";
import {getSpecies} from "../store/actions/species-actions";

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
    console.log(pageTarget)

    const caption = pageTarget.title ? pageTarget.title : pageTarget.name;
    return (
        <div>
            <PageTitle title={caption}/>
            <div className={'bg-black bg-opacity-75 py-8'}>
                <div className={'flex h-96 container mx-auto'}>
                    <CloudImage
                        className={'w-1/4 bg-red-500'}
                        src={`https://res.cloudinary.com/di6qjuwyo/starwars/${stateSlice}/${pageTarget.id}.jpg`}
                        title={caption}
                    />

                </div>
            </div>
            <div className={'container mx-auto bg-black'}>
                {formatSWAPIDataTable(pageTarget, undefined, true, ['opening_crawl'])}
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