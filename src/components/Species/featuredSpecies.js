import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import FeaturedBox from "../featuredBox";
import {Loader} from "../UI/loader/loader";
import {getSpecies} from "../../store/actions/species-actions";
import {FilmCard} from "../Films/filmCard";

const FeaturedSpecies = () => {
    const films = useSelector(state => state.species.items)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.species.loading)

    useEffect(() => {
        dispatch(getSpecies())
    }, [dispatch])
    return (
        <FeaturedBox title={"Species"}>
            {loading && <Loader/>}
            {films.size > 0 && [...films.values()].slice(0, 6).map((film) => (
                <FilmCard key={film.id} film={film}/>
            ))}
        </FeaturedBox>
    )
};

export default FeaturedSpecies;
