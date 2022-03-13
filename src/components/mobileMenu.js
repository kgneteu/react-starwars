import classes from './mobileMenu.module.scss';

function HeaderLink({id, title, link}) {
    return <li className={classes.navigation__item}>
        <a href={link} className={classes.navigation__link}>
            <span>{id}</span>
            {title}
        </a></li>;
}

const MobileMenu = () => {
    return (
            <div className={classes.mobileMenu}>
                <input type="checkbox" className={classes.menuCheckbox} id="navi-toggle"/>
                <label htmlFor="navi-toggle" className={classes.menuButton}>
                    <span className={classes.menuIcon}>&nbsp;</span>
                </label>
                <div className={classes.background}>&nbsp;</div>
                <nav className={classes.navigation__nav}>
                    <ul className={classes.navigation__list}>
                        <HeaderLink id={'01'} title={'About Natours'} link={"#"}/>
                        {/*<HeaderLink id={'02'} title={'Your benefits'} link={"#"}/>*/}
                        {/*<HeaderLink id={'03'} title={'Popular tours'} link={"#"}/>*/}
                        {/*<HeaderLink id={'04'} title={'Stories'} link={"#"}/>*/}
                        {/*<HeaderLink id={'05'} title={'Book now'} link={"#"}/>*/}
                    </ul>
                </nav>
        </div>
    );
};

export default MobileMenu;
