import {PageTitle} from "../pageTitle";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilm} from "../../store/actions/films-actions";
import {CloudImage} from "../cloudImage";
import Crawl from "../crawl";
import {formatSWAPIDataTable} from "../../utils/swapi";
import * as PropTypes from "prop-types";
import {Loader} from "../UI/loader/loader";


function DataBox({title, data}) {

    useEffect(()=>{

    },[])
    return (
        <p>{title}</p>
    )
}

DataBox.propTypes = {
    stateSlice: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array
};
const FilmPage = () => {
    const id = parseInt(useParams().id);
    const film = useSelector(state => state.films.items.get(id));
    const dispatch = useDispatch();
    console.log('draw');

    useEffect(() => {
        dispatch(getFilm(id))
    }, [id, dispatch]);

    if (!film) return <Loader/>

    return (
        <div>
            <PageTitle title={film.title}/>
            <div className={'bg-black bg-opacity-75 py-8'}>
                <div className={'flex h-96 container mx-auto'}>
                    <CloudImage
                        src={`https://res.cloudinary.com/di6qjuwyo/starwars/films/${film.id}.jpg`}
                        title={film.title}
                    />
                    {film.opening_crawl && <Crawl>
                        <div>{film.opening_crawl}</div>
                    </Crawl>}

                </div>
            </div>
            <div className={'container mx-auto bg-black'}>
                {formatSWAPIDataTable(film, undefined, true, ['opening_crawl'])}
            </div>

            <DataBox title={'characters'} stateSlice={'characters'} data={film.characters}/>
            <DataBox title={'starships'} stateSlice={'starships'} data={film.starships}/>
            <DataBox title={'vehicles'} stateSlice={'vehicles'} data={film.vehicles}/>
            <DataBox title={'planets'} stateSlice={'vehicles'} data={film.planets}/>
            <DataBox title={'species'} stateSlice={'species'} data={film.species}/>
        </div>
    );
};

export default FilmPage;
