import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import FeaturedBox from "../featuredBox";
import {Loader} from "../UI/loader/loader";
import {FilmCard} from "../Films/filmCard";
import {getVehicles} from "../../store/actions/vehicles-actions";

const FeaturedVehicles = () => {
    const starships = useSelector(state => state['vehicles'].items)
    const dispatch = useDispatch();
    const loading = useSelector(state => state['vehicles'].loading)

    useEffect(() => {
        dispatch(getVehicles())
    }, [dispatch])
    return (
        <FeaturedBox title={"vehicles"}>
            {loading && <Loader/>}
            {starships.size > 0 && [...starships.values()].slice(0, 6).map((starship) => (
                <FilmCard key={starship.id} film={starship}/>
            ))}
        </FeaturedBox>
    )
};

export default FeaturedVehicles;
