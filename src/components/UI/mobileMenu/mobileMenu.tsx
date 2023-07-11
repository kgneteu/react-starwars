import classes from './mobileMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { MouseEventHandler, useRef } from 'react';

type HeaderLinkProps = {
    id: string;
    title: string;
    link: string;
    onClose: MouseEventHandler;
};

function HeaderLink({ title, link, onClose }: HeaderLinkProps) {
    return (
        <li className={classes.mobileMenu__item}>
            <NavLink to={link} className={classes.mobileMenu__link} onClick={onClose}>
                {/*<span>{id}</span>*/}
                {title}
            </NavLink>
        </li>
    );
}

type MobileMenuProps = {
    links: () => { to: string; title: string }[];
};

const MobileMenu = ({ links }: MobileMenuProps) => {
    const menuCheckRef = useRef<HTMLInputElement>(null);

    const onMenuClose = () => {
        menuCheckRef.current?.click();
    };

    return (
        <div className={classes.mobileMenu}>
            <input
                ref={menuCheckRef}
                type="checkbox"
                className={classes.menuCheckbox}
                id="navi-toggle"
            />
            <label htmlFor="navi-toggle" className={classes.menuButton}>
                <span className={classes.menuIcon}>&nbsp;</span>
            </label>
            <div className={classes.background}>&nbsp;</div>
            <nav className={classes.mobileMenu__nav}>
                <ul className={classes.mobileMenu__list}>
                    {links().map((link, index) => (
                        <HeaderLink
                            id={`${index}`}
                            key={index}
                            link={link.to}
                            title={link.title}
                            onClose={() => onMenuClose()}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MobileMenu;
