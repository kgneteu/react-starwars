import classes from "./loader.module.scss";
export function Loader() {
    return (
        <div className={classes.loader}>
            <div className={classes.content}>
            Loading...
            </div>
        </div>);
}

Loader.propTypes = {};

