import {PageTitle} from "../pageTitle";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilms} from "../../store/actions/films-actions";
import {CloudImage} from "../cloudImage";
import Crawl from "../crawl";
import {formatSWAPIDataTable} from "../../utils/swapi";
import {Loader} from "../UI/loader/loader";
import {getCharacters} from "../../store/actions/characters-actions";
import {DataBox} from "../dataBox";
import {getStarships} from "../../store/actions/starships-actions";
import {getVehicles} from "../../store/actions/vehicles-actions";
import {getPlanets} from "../../store/actions/planets-actions";
import {getSpecies} from "../../store/actions/species-actions";



const CharacterPage = () => {
    const id = parseInt(useParams().id);
    const character = useSelector(state => state.characters.items.get(id));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getCharacters([id]))
    }, [id, dispatch]);

    if (!character) return <Loader/>
    console.log(character)
    return (
        <div>
            <PageTitle title={character.name}/>
            <div className={'bg-black bg-opacity-75 py-8'}>
                <div className={'flex h-96 container mx-auto'}>
                    <CloudImage
                        className={'w-1/4 bg-red-500'}
                        src={`https://res.cloudinary.com/di6qjuwyo/starwars/characters/${character.id}.jpg`}
                        title={character.name}
                    />

                </div>
            </div>
            <div className={'container mx-auto bg-black'}>
                {formatSWAPIDataTable(character, undefined, false, ['opening_crawl'])}
            </div>
            <div className={'container mx-auto'}>
                <DataBox title={'films'} stateSlice={'films'} items={character.films} getDataAction={getFilms}/>
                {/*<DataBox title={'characters'} stateSlice={'characters'} items={character.characters} getDataAction={getCharacters}/>*/}
                <DataBox title={'starships'} stateSlice={'starships'} items={character.starships} getDataAction={getStarships}/>
                <DataBox title={'vehicles'} stateSlice={'vehicles'} items={character.vehicles} getDataAction={getVehicles}/>
                <DataBox title={'planets'} stateSlice={'planets'} items={character.planets} getDataAction={getPlanets}/>
                <DataBox title={'species'} stateSlice={'species'} items={character.species} getDataAction={getSpecies}/>
            </div>
        </div>
    );
};

export default CharacterPage;
