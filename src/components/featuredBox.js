import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState, Suspense} from "react";
import {Loader} from "./UI/loader/loader";
import {BasicCard} from "./basicCard";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import NeonButton from "./UI/neonButton/neonButton";
import useVisible from "../hooks/useVisible";


function DelayedAppear({children}) {
    //todo republic cruiser
    const target = useRef()
    // const isVisible = useVisible(target, false, false)
    // console.log(isVisible)
    // let content='';
    // if (isVisible) content=children;

    return (<Suspense><div ref={target}>{children}</div></Suspense>)
}

DelayedAppear.propTypes = {children: PropTypes.node};

const FeaturedBox = ({title, stateSlice, getDataAction}) => {
    const itemsMap = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getDataAction()).finally(
            setLoading(false)
        )
    }, [dispatch, getDataAction])

    if (loading) return <Loader/>
    return (
        <DelayedAppear>
            <section className={'bg-black bg-opacity-75 my-24 w-full animate-appear'}>
                <div className={'container mx-auto'}>
                    <h2>{title}</h2>
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
                    <div className={'text-center mt-1 py-4'}>
                        <Link to={`/${stateSlice}`} className={'text-center'}>
                            <NeonButton className={'w-60'}>more</NeonButton>
                        </Link>
                    </div>
                </div>
            </section>
        </DelayedAppear>

    )
};

FeaturedBox.propTypes = {
    title: PropTypes.string.isRequired,
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
};

export default FeaturedBox;
