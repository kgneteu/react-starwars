import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {getCharacterPage} from "../../store/actions/characters-actions";
import {Loader} from "../UI/loader/loader";
import {BasicCard} from "../basicCard";


const Characters = () => {
    const characters = useSelector(state => state.characters.items)
    const dispatch = useDispatch();
    const loadMore = useRef(null);
    const loading = useSelector(state => state.characters.loading)

    useEffect(() => {
        const handleObserver = (entities) => {
            const target = entities[0];
            if (target.isIntersecting) {
                dispatch(getCharacterPage());
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
                {characters.size > 0 && [...characters.values()].map((character) => (
                    <BasicCard key={character.id} item={character}/>
                ))}
                <div ref={loadMore} className='invisible w-0 h-0 absolute bottom-0'/>
            </div>
            {loading && <Loader/>}
        </>
    )
};

Characters.propTypes = {};

export default Characters;
