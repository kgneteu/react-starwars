import {Link, NavLink} from "react-router-dom";
import classes from "./header.module.scss";
import React from "react";
import logo from './../../assets/star_wars_logo.svg'
function Header() {
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
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/films'}>Films</NavLink>
                    <NavLink to={'/characters'}>Characters</NavLink>
                    <NavLink to={'/starships'}>Starships </NavLink>
                    <NavLink to={'/vehicles'}>Vehicles </NavLink>
                    <NavLink to={'/planets'}>Planets</NavLink>
                    <NavLink to={'/species'}>Species </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default React.memo(Header);
