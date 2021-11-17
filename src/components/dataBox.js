import {useDispatch, useSelector} from "react-redux";
import {extractSWAPIId} from "../utils/swapi";
import {useEffect} from "react";
import * as PropTypes from "prop-types";

export function DataBox({title, items, stateSlice, getDataAction}) {
    const loadedItems = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const itemsIds = items ? items.map(item => {
        return extractSWAPIId(item);
    }) : undefined;

    useEffect(() => {
        // const itemsIds = items.map(item => {
        //     return extractSWAPIId(item);
        // })
        if (itemsIds) {
            const neededIds = itemsIds.filter(id => !loadedItems.has(id))
            dispatch(getDataAction(neededIds));
        }
    }, [dispatch, itemsIds, loadedItems, getDataAction])

    const foundItems = itemsIds?itemsIds.filter(id => loadedItems.has(id)).map(id => loadedItems.get(id)):null;
    if (!foundItems) return null;
    return (
        <div>
            <p className={'font-star-wars'}>{title}</p>
            <div className={'flex flex-wrap'}>
                {foundItems.map(item => {
                    return (
                        <div key={item.id} className={'mr-2'}>
                            {item.name}
                        </div>
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
