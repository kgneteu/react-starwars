import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import FeaturedBox from "../featuredBox";
import {Loader} from "../UI/loader/loader";
import {getPlanets} from "../../store/actions/planets-actions";
import {FilmCard} from "../Films/filmCard";

const FeaturedPlanets = () => {
    const films = useSelector(state => state.planets.items)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.planets.loading)

    useEffect(() => {
        dispatch(getPlanets())
    }, [dispatch])
    return (
        <FeaturedBox title={"Planets"}>
            {loading && <Loader/>}
            {films.size > 0 && [...films.values()].slice(0, 6).map((film) => (
                <FilmCard key={film.id} film={film}/>
            ))}
        </FeaturedBox>
    )
};

export default FeaturedPlanets;
