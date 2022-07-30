import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import useVisible from "../hooks/useVisible";
import PropTypes from "prop-types";
import {ArticleCard} from "./articleCard/articleCard";
import {PageTitle} from "./UI/pageTitle/pageTitle";


const CategoryPage = ({title = '', stateSlice, getDataAction, ...rest}) => {
    //todo optimization
    const pageTitle = title !== '' ? title : stateSlice;
    const items = useSelector(state => state[stateSlice].items)

    const dispatch = useDispatch();
    const loadMore = useRef(null);
    //const [loading, setLoading] = useState(true);
    const isVisible = useVisible(loadMore, false, true)

    useEffect(() => {
        if (isVisible) {
      //      setLoading(true)
            dispatch(getDataAction()).finally(
        //        setLoading(false)
            );
        }

    }, [isVisible, dispatch, getDataAction])

    return (
        <>
            <PageTitle title={pageTitle}/>
            <div className={'container mx-auto '}>
                <div className='flex flex-wrap justify-center gap-8 relative'>
                    {items.size > 0 && [...items.values()].map((item) => {
                        return (
                            // <div className={'animate-appear'}>
                                <ArticleCard key={item.id+new Date().getMilliseconds()} item={item} category={stateSlice}/>
                            // </div>
                        )
                    })}
                    <div ref={loadMore} className='absolute w-0 h-0 bottom-96'/>
                </div>
                {/*{loading && <Loader/>}*/}
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
