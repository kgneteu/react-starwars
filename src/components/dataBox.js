import {useDispatch, useSelector} from "react-redux";
import {extractSWAPIId} from "../utils/swapi.utils";
import {useEffect} from "react";
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";

export function DataBox({title, items, stateSlice, getDataAction}) {
    const loadedItems = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const itemsIds = items ? items.map(item => {
        return extractSWAPIId(item);
    }) : undefined;

    useEffect(() => {
        if (itemsIds) {
            const neededIds = itemsIds.filter(id => !loadedItems.has(id))
            dispatch(getDataAction(neededIds));
        }
    }, [dispatch, itemsIds, loadedItems, getDataAction])

    const foundItems = itemsIds ? itemsIds.filter(id => loadedItems.has(id)).map(id => loadedItems.get(id)) : undefined;
    if (!foundItems) return null;

    return (
        <div>
            <p className={'font-star-wars text-3xl my-2 lowercase'}>{title}</p>
            <div className={'flex flex-wrap gap-4'}>
                {foundItems.map(item => {
                    return (
                        <Link key={item.id} to={`/${stateSlice}/${item.id}`}>
                            <div className={'border-2 p-2 rounded-lg bg-gray-900 border-gray-400'}>
                                {item.name ? item.name : item.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

DataBox.propTypes = {
    stateSlice: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.array,
    getDataAction: PropTypes.func,
};
