import classes from './neonButon.module.scss'

const NeonButton = ({children}) => {
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <div className={classes.button}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NeonButton;
