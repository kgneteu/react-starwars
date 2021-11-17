import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import useVisible from "../hooks/useVisible";
import PropTypes from "prop-types";
import {BasicCard} from "./basicCard";
import {Loader} from "./UI/loader/loader";
import {PageTitle} from "./pageTitle";


const CategoryPage = ({title = '', stateSlice, getDataAction, ...rest}) => {
    const pageTitle = title !== '' ? title : stateSlice;
    const items = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const loadMore = useRef(null);
    const [loading, setLoading] = useState(true);
    const isVisible = useVisible(loadMore, true, true)

    console.log('Redraw', isVisible, loading, rest)
    useEffect(() => {
        if (isVisible) {
            setLoading(true)
            dispatch(getDataAction()).finally(
                setLoading(false)
            );
        }

    }, [isVisible, dispatch, getDataAction])

    return (
        <>
            <PageTitle title={pageTitle}/>
            <div className={'container mx-auto'}>
                <div className='flex flex-wrap justify-center gap-8 relative'>
                    {items.size > 0 && [...items.values()].map((item) => (
                        <div className={'animate-appear'}>
                        <BasicCard key={item.id} item={item} category={stateSlice}/>
                        </div>
                    ))}
                    <div ref={loadMore} className='bg-red-500 p-0 w-0 h-5 '/>
                </div>
                {loading && <Loader/>}
            </div>
        </>
    )
}

CategoryPage.propTypes = {
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default CategoryPage;
