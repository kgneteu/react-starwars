import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCharactersById} from "../../../store/characters/characters.actions";
import {Loader} from "../../UI/loader/loader";
import {PageTitle} from "../../UI/pageTitle/pageTitle";
import {CloudImage} from "../../UI/cloudImage/cloudImage";
import {formatSWAPIDataTable} from "../../../utils/swapi.utils";
import {RelatedItem} from "../../relatedItem/relatedItem";
import {getFilmsById} from "../../../store/films/films.actions";
import {getStarshipsById} from "../../../store/starships/starships.actions";
import {getVehiclesById} from "../../../store/vehicles/vehicles.actions";
import {getPlanetsById} from "../../../store/planets/planets.actions";
import {getSpeciesById} from "../../../store/species/species.actions";
import {AppState} from "../../../store/store.types";

const dataLoader: { [index: string]: any } = {
    films: getFilmsById,
    characters: getCharactersById,
    planets: getPlanetsById,
    species: getSpeciesById,
    starships: getStarshipsById,
    vehicles: getVehiclesById,
}

type Props = {
    id: number,
    stateSlice: string,
}

export function LandingPage({id, stateSlice}: Props) {
    const pageTarget = useSelector((state: AppState) => state[stateSlice].items[id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dataLoader[stateSlice]([id]))
    }, [id, dispatch, stateSlice]);

    if (!pageTarget) return <Loader/>
    const caption = pageTarget.title ? pageTarget.title : pageTarget.name;
    return (
        <div>
            <PageTitle title={caption}/>
            <div className={'py-8'}>
                <div className={'flex container mx-auto gap-8 flex-wrap'}>
                    <div className={"rounded-lg p-2 bg-black flex-shrink"}>
                        <CloudImage
                            className={'object-cover'}
                            category={stateSlice} imgId={pageTarget.id} preset={'page'}
                            title={caption}
                        />
                    </div>
                    <div className={'rounded-lg p-6 bg-black flex-shrink opacity-50'}>
                        {formatSWAPIDataTable(pageTarget, undefined, true, ['opening_crawl'])}
                    </div>
                </div>
            </div>
            <div className={'container mx-auto'}>
                <RelatedItem title={'films'} stateSlice={'films'} items={pageTarget.films} getDataAction={getFilmsById}/>
                <RelatedItem title={'people'} stateSlice={'characters'} items={pageTarget.people}
                             getDataAction={getCharactersById}/>
                <RelatedItem title={'pilots'} stateSlice={'characters'} items={pageTarget.pilots}
                             getDataAction={getCharactersById}/>
                <RelatedItem title={'residents'} stateSlice={'characters'} items={pageTarget.residents}
                             getDataAction={getCharactersById}/>
                <RelatedItem title={'starships'} stateSlice={'starships'} items={pageTarget.starships}
                             getDataAction={getStarshipsById}/>
                <RelatedItem title={'vehicles'} stateSlice={'vehicles'} items={pageTarget.vehicles}
                             getDataAction={getVehiclesById}/>
                <RelatedItem title={'planets'} stateSlice={'planets'} items={pageTarget.planets}
                             getDataAction={getPlanetsById}/>
                <RelatedItem title={'species'} stateSlice={'species'} items={pageTarget.species}
                             getDataAction={getSpeciesById}/>
            </div>
        </div>
    );
}
