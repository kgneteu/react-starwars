import classes from './crawl.module.css';
import { ReactNode } from 'react';

const Crawl = ({ children }: { children: ReactNode }) => {
    return (
        <div className={classes.body}>
            <div className={classes.fade}></div>
            <section className={classes.starWars}>
                <div className={classes.crawl}>{children}</div>
            </section>
        </div>
    );
};

export default Crawl;
