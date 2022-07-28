import {Link, NavLink} from "react-router-dom";
import classes from "./header.module.scss";
import React from "react";
import logo from '../../../assets/images/star_wars_logo.svg'
import MobileMenu from "../../UI/mobileMenu/mobileMenu";
import {useMediaQuery} from "react-responsive";

function menuLinks() {
    return [
        {to: "/", title: "Home"},
        {to: "/films", title: "Films"},
        {to: "/characters", title: "Characters"},
        {to: "/starships", title: "Starships"},
        {to: "/vehicles", title: "Vehicles"},
        {to: "/planets", title: "Planets"},
        {to: "/species", title: "Species"},
    ]
}

function Header() {
    const isSmallScreen = useMediaQuery({query: '(max-width: 1024px)'})
    return (
        <header className={classes.header}>
            <div className={'flex container mx-auto'}>
                <div className={'w-48 text-center'}>
                    <Link to={'/'} className={''}>
                        <img src={logo} className={classes.logo} alt={'StarWars Fandom'}/>
                        <div className={classes.logoTitle}>Fandom</div>
                    </Link>
                </div>
                <div className={' flex-grow'}/>
                {!isSmallScreen &&
                    <nav>
                        {menuLinks().map((link, index) =>
                            <NavLink key={index} to={link.to}>{link.title}</NavLink>
                        )}
                    </nav>}
                {isSmallScreen && <MobileMenu links={() => menuLinks()}/>}
            </div>
        </header>
    )

}

export default React.memo(Header);
