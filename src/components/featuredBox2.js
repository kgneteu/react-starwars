import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import FeaturedBox from "./featuredBox";
import {Loader} from "./UI/loader/loader";
import {BasicCard} from "./basicCard";
import PropTypes from "prop-types";

const FeaturedBox2 = ({title, stateSlice, getDataAction}) => {
    const itemsMap = useSelector(state => state[stateSlice].items)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        dispatch(getDataAction()).finally(
            setLoading(false)
        )
    }, [dispatch,getDataAction])
    return (
        <FeaturedBox title={title}>
            {loading && <Loader/>}
            {itemsMap.size > 0 && [...itemsMap.values()].slice(0, 6).map((item) => (
                <BasicCard key={item.id} item={item}/>
            ))}
        </FeaturedBox>
    )
};

FeaturedBox2.propTypes = {
    title: PropTypes.string.isRequired,
    stateSlice: PropTypes.string.isRequired,
    getDataAction: PropTypes.func.isRequired,
};

export default FeaturedBox2;
