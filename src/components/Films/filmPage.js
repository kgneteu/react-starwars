import {PageTitle} from "../pageTitle";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFilm} from "../../store/actions/films-actions";
import {CloudImage} from "../cloudImage";
import Crawl from "../crawl";


const FilmPage = () => {
    const id = parseInt(useParams().id);
    const film = useSelector(state => state.films.items.get(id));
    const dispatch = useDispatch();
    const crawlText = film?.opening_crawl;
    console.log(id)
    console.log(crawlText)

    useEffect(() => {
        dispatch(getFilm(id))
    }, [id, dispatch]);

    return (
        <div>
            <PageTitle title={film?.title}/>
            <div className={'bg-black bg-opacity-75 py-8'}>
                <div className={'flex h-96 container mx-auto'}>
                    <CloudImage
                        src={`https://res.cloudinary.com/di6qjuwyo/starwars/films/${film?.id}.jpg`}
                        title={film?.title}
                    />
                    {crawlText && <Crawl>
                        <div>{crawlText}</div>
                    </Crawl>}

                </div>
            </div>
        </div>
    );
};

export default FilmPage;
