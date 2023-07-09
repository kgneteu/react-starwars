import { useDispatch, useSelector } from 'react-redux';
import { extractSWAPIId } from '../../utils/swapi.utils';
import { useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/store.types';
import classes from './relatedItem.module.css';

type Props = {
    title: string;
    stateSlice: string;
    items: string[];
    getDataAction: any;
};

export function RelatedItem({ title, items, stateSlice, getDataAction }: Props) {
    const loadedItems = useSelector((state: AppState) => state[stateSlice].items);
    const dispatch = useDispatch();
    const itemsIds = items
        ? items.map((item) => {
              return extractSWAPIId(item);
          })
        : undefined;

    useEffect(() => {
        if (itemsIds) {
            const neededIds = itemsIds.filter((id) => !(id in loadedItems));
            dispatch(getDataAction(neededIds));
        }
    }, [dispatch, itemsIds, loadedItems, getDataAction]);

    const foundItems = itemsIds
        ? itemsIds.filter((id) => id in loadedItems).map((id) => loadedItems[id])
        : undefined;
    if (!foundItems) return null;

    return (
        <div>
            <p className={'font-star-wars text-3xl my-2 lowercase'}>{title}</p>
            <div className={'flex flex-wrap gap-4'}>
                {foundItems.map((item) => {
                    return (
                        <Link key={item.id} to={`/${stateSlice}/${item.id}`}>
                            <div className={classes.linkBox}>
                                {item.name ? item.name : item.title}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

RelatedItem.propTypes = {
    stateSlice: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array,
    getDataAction: PropTypes.func
};
