import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PageTitle } from '../../UI/pageTitle/pageTitle';
import { AppDispatch, AppGetState, AppState } from '../../../store/store.types';
import { useInView } from 'react-intersection-observer';
import { FlyInArticleCard } from '../../flyInArticleCard/flyInArticleCard';

interface Props {
    title?: string;
    stateSlice: string;
    getDataAction: () => (dispatch: AppDispatch, getState: AppGetState) => Promise<void>;
}

const CategoryPage = ({ title = '', stateSlice, getDataAction }: Props) => {
    const pageTitle = title !== '' ? title : stateSlice;
    const dataEnd = useSelector<AppState, boolean>(
        (state: AppState): boolean => state[stateSlice].dataEnd
    );
    const items = useSelector((state: AppState) => state[stateSlice].items);
    const dispatch = useDispatch();
    const { ref: loadMoreRef, inView: isVisible } = useInView();
    useEffect(() => {
        if (isVisible && !dataEnd) {
            dispatch(getDataAction());
        }
    }, [isVisible, dataEnd, dispatch, getDataAction]);

    return (
        <>
            <PageTitle title={pageTitle} />
            <div className={'container mx-auto'} key={stateSlice}>
                <div className="flex flex-wrap justify-center gap-8 relative">
                    {Object.keys(items).length > 0 &&
                        [...Object.values(items).values()].map((item) => {
                            return (
                                <FlyInArticleCard key={item.id} item={item} category={stateSlice} />
                            );
                        })}
                    {!dataEnd && <div ref={loadMoreRef} className="absolute w-5 h-5 bottom-9" />}
                </div>
            </div>
        </>
    );
};

CategoryPage.propTypes = {
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
    title: PropTypes.string
};

export default CategoryPage;
