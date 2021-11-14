import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {getHeroes} from "../../store/actions/heroes-actions";
import {HeroCard} from "./heroCard";
import FeaturedBox from "../featuredBox";
import {Loader} from "../UI/loader/loader";


const FeaturedHeroes = () => {
    const heroes = useSelector(state => state.heroes.items)
    const dispatch = useDispatch();
    const loadMore = useRef(null);
    const loading = useSelector(state => state.heroes.loading)

    useEffect(() => {
        dispatch(getHeroes())
    }, [dispatch])

    return (
        <FeaturedBox title={"Characters"}>
            {loading && <Loader/>}
            {heroes.size > 0 && [...heroes.values()].slice(0, 6).map((hero) => (
                <HeroCard key={hero.id} hero={hero}/>
            ))}
            <div ref={loadMore} className='invisible w-0 h-0 absolute bottom-0'/>
        </FeaturedBox>
    )
};

export default FeaturedHeroes;
