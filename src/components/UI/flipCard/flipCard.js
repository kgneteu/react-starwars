import * as PropTypes from "prop-types";
import classes from "./flipCard.module.scss";

export const FlipCard = ({children}) => {

    return (
        <article className={classes.flipCard}>
            {children}
        </article>
    )
}

FlipCard.propTypes = {children: PropTypes.node};
