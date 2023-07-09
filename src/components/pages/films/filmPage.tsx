import { PageTitle } from '../../UI/pageTitle/pageTitle';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFilmsById } from '../../../store/films/films.actions';
import { CloudImage } from '../../UI/cloudImage/cloudImage';
import Crawl from '../../crawl/crawl';
import { formatSWAPIDataTable } from '../../../utils/swapi.utils';
import { Loader } from '../../UI/loader/loader';
import { getCharactersById } from '../../../store/characters/characters.actions';
import { RelatedItem } from '../../relatedItem/relatedItem';
import { getStarshipsById } from '../../../store/starships/starships.actions';
import { getVehiclesById } from '../../../store/vehicles/vehicles.actions';
import { getPlanetsById } from '../../../store/planets/planets.actions';
import { getSpeciesById } from '../../../store/species/species.actions';
import { AppState } from '../../../store/store.types';

const FilmPage = () => {
    const id = parseInt(useParams().id || '');
    const film = useSelector((state: AppState) => state.films.items[id]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilmsById([id]));
    }, [id, dispatch]);

    if (!film) return <Loader />;

    return (
        <div>
            <PageTitle title={film.title} />
            <div className={'bg-black bg-opacity-75 py-8'}>
                <div className={'flex h-96 container mx-auto'}>
                    <CloudImage
                        className={'w-auto'}
                        category="films"
                        imgId={film.id}
                        preset={'page'}
                        title={film.title}
                    />
                    {film.opening_crawl && (
                        <Crawl>
                            <div>{film.opening_crawl}</div>
                        </Crawl>
                    )}
                </div>
            </div>
            <div className={'container mx-auto bg-black'}>
                {formatSWAPIDataTable(film, undefined, true, ['opening_crawl'])}
            </div>
            <div className={'container mx-auto'}>
                <RelatedItem
                    title={'characters'}
                    stateSlice={'characters'}
                    items={film.characters}
                    getDataAction={getCharactersById}
                />
                <RelatedItem
                    title={'starships'}
                    stateSlice={'starships'}
                    items={film.starships}
                    getDataAction={getStarshipsById}
                />
                <RelatedItem
                    title={'vehicles'}
                    stateSlice={'vehicles'}
                    items={film.vehicles}
                    getDataAction={getVehiclesById}
                />
                <RelatedItem
                    title={'planets'}
                    stateSlice={'planets'}
                    items={film.planets}
                    getDataAction={getPlanetsById}
                />
                <RelatedItem
                    title={'species'}
                    stateSlice={'species'}
                    items={film.species}
                    getDataAction={getSpeciesById}
                />
            </div>
        </div>
    );
};

export default FilmPage;
