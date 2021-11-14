import * as PropTypes from "prop-types";
import classes from "./flipCard.module.scss";

export const FlipCard = ({children}) => {

    return (
        <div className={classes.flipCard}>
            {children}
        </div>
    )
}

FlipCard.propTypes = {children: PropTypes.node};
