import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Loader} from "./UI/loader/loader";
import {BasicCard} from "./basicCard";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";

const FeaturedBox = ({title, stateSlice, getDataAction}) => {
    const itemsMap = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getDataAction()).finally(
            setLoading(false)
        )
    }, [dispatch, getDataAction])
    return (
        <>
            <h2>{title}</h2>
            <section className={'bg-gray-800 my-24 w-full py-16'}>
                <div className={'container mx-auto'}>
                    <div className='flex gap-8 justify-center'>
                        {loading && <Loader/>}
                        <MediaQuery maxWidth={814}>
                            {itemsMap.size > 0 && [...itemsMap.values()].slice(0, 1).map((item) => (
                                <BasicCard key={item.id} item={item} category={stateSlice}/>
                            ))}
                        </MediaQuery>
                        <MediaQuery maxWidth={1279} minWidth={815}>
                            {itemsMap.size > 0 && [...itemsMap.values()].slice(0, 2).map((item) => (
                                <BasicCard key={item.id} item={item} category={stateSlice}/>
                            ))}
                        </MediaQuery>
                        <MediaQuery maxWidth={1549} minWidth={1280}>
                            {itemsMap.size > 0 && [...itemsMap.values()].slice(0, 3).map((item) => (
                                <BasicCard key={item.id} item={item} category={stateSlice}/>
                            ))}
                        </MediaQuery>
                        <MediaQuery minWidth={1550}>
                            {itemsMap.size > 0 && [...itemsMap.values()].slice(0, 4).map((item) => (
                                <BasicCard key={item.id} item={item} category={stateSlice}/>
                            ))}
                        </MediaQuery>
                    </div>

                </div>

            </section>
            <Link to={`/${stateSlice}`} className={'text-center text-lg z-50'}>More...</Link>
        </>
    )
};

FeaturedBox.propTypes = {
    title: PropTypes.string.isRequired,
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
};

export default FeaturedBox;
