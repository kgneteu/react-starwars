import classes from "./crawl.module.css";
const Crawl = ({children}) => {
    return (
        <div className={classes.body}>
           <div className={classes.fade}></div>
            <section className={classes.starWars}>
                <div className={classes.crawl}>
                    {children}
                </div>
            </section>
        </div>
    );
};

export default Crawl;
