import classes from "./starsParallax.module.scss";
const StarParallax = () => {
    return (
        <div className={classes.sky}>
            <div className={classes.stars}/>
            <div className={classes.stars2}/>
            <div className={classes.stars3}/>
        </div>
    );
};

StarParallax.propTypes = {};

export default StarParallax;
