import classes from './neonButon.module.scss'
import clsx from "clsx";

const NeonButton = ({children, className = ''}) => {
    return (
        <div className={clsx([classes.container, className,'transform scale-50'])}>
            <div className={classes.button}>
                {children}
            </div>
        </div>
    );
};

export default NeonButton;
