import {useDispatch, useSelector} from "react-redux";
import {useLayoutEffect, useRef} from "react";
import useVisible from "../../../hooks/useVisible";
import PropTypes from "prop-types";
import {ArticleCard} from "../../articleCard/articleCard";
import {PageTitle} from "../../UI/pageTitle/pageTitle";
import {AppDispatch, AppGetState, AppState} from "../../../store/store.types";


interface Props {
    title?: string,
    stateSlice: string,
    getDataAction: () => (dispatch: AppDispatch, getState: AppGetState) => Promise<void>
}

const CategoryPage = ({title = '', stateSlice, getDataAction}: Props) => {
    const pageTitle = title !== '' ? title : stateSlice;
    const items = useSelector((state: AppState) => state[stateSlice].items)
    const dataEnd = useSelector((state: AppState) => state[stateSlice].dataEnd)
    console.log(dataEnd)

    const dispatch = useDispatch();
    const loadMore = useRef<HTMLDivElement>(null);
    const isVisible = useVisible(loadMore, false)

    useLayoutEffect(() => {
        console.log('dis', dataEnd, isVisible)
        if ((isVisible) && (!dataEnd)) {
            dispatch(getDataAction())
        }

    }, [isVisible, dataEnd, dispatch, getDataAction])

    return (
        <>
            <PageTitle title={pageTitle}/>
            <div className={'container mx-auto '}>
                <div className='flex flex-wrap justify-center gap-8 relative'>
                    {Object.keys(items).length > 0 && [...Object.values(items).values()].map((item) => {
                        // @ts-ignore
                        return (
                            <ArticleCard key={item.id} item={item}
                                         category={stateSlice}/>
                        )
                    })}
                    {!dataEnd && <div ref={loadMore} className='absolute w-5 h-5 bottom-9 bg-red-400'/>}
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
