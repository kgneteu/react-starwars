import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {FilmCard} from "./filmCard";
import {getFilms} from "../../store/actions/films-actions";
import FeaturedBox from "../featuredBox";
import {Loader} from "../UI/loader/loader";

const FeaturedFilms = () => {
    const films = useSelector(state => state.films.items)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.films.loading)

    useEffect(() => {
        dispatch(getFilms())
    }, [dispatch])
    return (
        <FeaturedBox title={"Films"}>
            {loading && <Loader/>}
            {films.size > 0 && [...films.values()].slice(0, 6).map((film) => (
                <FilmCard key={film.id} film={film}/>
            ))}
        </FeaturedBox>
    )
};

export default FeaturedFilms;
