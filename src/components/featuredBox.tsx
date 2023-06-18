import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Loader} from "./UI/loader/loader";
import {ArticleCard} from "./articleCard/articleCard";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import NeonButton from "./UI/neonButton/neonButton";
import {AppState} from "../store/store.types";

type Props = {
    title: string,
    stateSlice: string,
    getDataAction: () => any
}

const FeaturedBox = ({title, stateSlice, getDataAction}: Props) => {

    const items = useSelector((state: AppState) => state[stateSlice].items)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getDataAction()).finally(
            setLoading(false)
        )
    }, [dispatch, getDataAction])

    if (loading) return <Loader/>
    return (
        <section className={'bg-black bg-opacity-75 my-24 w-full animate-appear'}>
            <div className={'container mx-auto'}>
                <h2 className={"opacity-75"}>{title}</h2>
                <div className='flex gap-8 justify-center'>
                    {loading && <Loader/>}
                    <MediaQuery maxWidth={814}>
                        {Object.keys(items).length > 0 && [...Object.values(items).values()].slice(0, 1).map((item) => (
                            <ArticleCard key={item.id} item={item} category={stateSlice}/>
                        ))}
                    </MediaQuery>
                    <MediaQuery maxWidth={1279} minWidth={815}>
                        {Object.keys(items).length > 0 && [...Object.values(items).values()].slice(0, 2).map((item) => (
                            <ArticleCard key={item.id} item={item} category={stateSlice}/>
                        ))}
                    </MediaQuery>
                    <MediaQuery maxWidth={1549} minWidth={1280}>
                        {Object.keys(items).length > 0 && [...Object.values(items).values()].slice(0, 3).map((item) => (
                            <ArticleCard key={item.id} item={item} category={stateSlice}/>
                        ))}
                    </MediaQuery>
                    <MediaQuery minWidth={1550}>
                        {Object.keys(items).length > 0 && [...Object.values(items).values()].slice(0, 4).map((item) => (
                            <ArticleCard key={item.id} item={item} category={stateSlice}/>
                        ))}
                    </MediaQuery>
                </div>
                <div className={'text-center mt-1 py-4'}>
                    <Link to={`/${stateSlice}`} className={'text-center'}>
                        <NeonButton className={'w-60'}>more</NeonButton>
                    </Link>
                </div>
            </div>
        </section>
    )
};

FeaturedBox.propTypes = {
    title: PropTypes.string.isRequired,
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
};

export default FeaturedBox;
