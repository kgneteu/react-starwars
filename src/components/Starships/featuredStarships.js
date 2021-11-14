import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import FeaturedBox from "../featuredBox";
import {Loader} from "../UI/loader/loader";
import {FilmCard} from "../Films/filmCard";
import {getStarships} from "../../store/actions/starships-actions";

const FeaturedStarships = () => {
    const starships = useSelector(state => state['starships'].items)
    const dispatch = useDispatch();
    const loading = useSelector(state => state['starships'].loading)

    useEffect(() => {
        dispatch(getStarships())
    }, [dispatch])
    return (
        <FeaturedBox title={"Starships"}>
            {loading && <Loader/>}
            {starships.size > 0 && [...starships.values()].slice(0, 6).map((starship) => (
                <FilmCard key={starship.id} film={starship}/>
            ))}
        </FeaturedBox>
    )
};

export default FeaturedStarships;
