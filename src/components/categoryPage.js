import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import useVisible from "../hooks/useVisible";
import PropTypes from "prop-types";
import {BasicCard} from "./basicCard";
import {Loader} from "./UI/loader/loader";
import {Header} from "./header";


const CategoryPage = ({title = '', stateSlice, getDataAction}) => {
    if (title === '') title = stateSlice;
    const items = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const loadMore = useRef(null);
    const [loading, setLoading] = useState(false);
    const isVisible = useVisible(loadMore)


    useEffect(() => {
        if (isVisible) {
            setLoading(true)
            dispatch(getDataAction()).finally(
                setLoading(false)
            );
        }
    }, [isVisible, dispatch, getDataAction])

    return (
        <div className={'container mx-auto'}>
            <Header title={title}/>
            <div className='flex flex-wrap justify-center gap-8 relative'>
                {items.size > 0 && [...items.values()].map((item) => (
                    <BasicCard key={item.id} item={item} category={stateSlice}/>
                ))}
                <div ref={loadMore} className='bg-red-500 p-0 w-0 h-5 '/>
            </div>
            {loading && <Loader/>}
        </div>
    )
}

CategoryPage.propTypes = {
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default CategoryPage;
