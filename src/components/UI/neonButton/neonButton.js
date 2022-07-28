import classes from './neonButton.module.scss'
import clsx from "clsx";

const NeonButton = ({children, small, className = ''}) => {
    return (
        <div className={clsx([classes.container, className])}>
            <div className={small ? classes.smallButton : classes.button}>
                {children}
            </div>
        </div>
    );
};

export default NeonButton;
