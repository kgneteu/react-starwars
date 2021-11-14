import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {getCharacters} from "../../store/actions/heroes-actions";
import {Loader} from "../UI/loader/loader";
import {BasicCard} from "../basicCard";
import {getFilms} from "../../store/actions/films-actions";


const Films = () => {
    const heroes = useSelector(state => state.films.items)
    const dispatch = useDispatch();
    const loadMore = useRef(null);
    const loading = useSelector(state => state.films.loading)

    useEffect(() => {
        const handleObserver = (entities) => {
            const target = entities[0];
            if (target.isIntersecting) {
                dispatch(getFilms());
            }
        }

        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        const obs = loadMore.current
        if (obs) {
            observer.observe(obs)
            return () => {
                observer.unobserve(obs)
            }
        }
    }, [dispatch])

    return (
        <>
            <div className='flex flex-wrap justify-around gap-8 relative'>
                {heroes.size > 0 && [...heroes.values()].map((hero) => (
                    <BasicCard key={hero.id} item={hero}/>
                ))}
                <div ref={loadMore} className='invisible w-0 h-0 absolute bottom-0'/>
            </div>
            {loading && <Loader/>}
        </>
    )
};

Films.propTypes = {};

export default Films;
