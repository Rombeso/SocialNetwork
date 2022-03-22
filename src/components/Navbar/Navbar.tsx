import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";

export const NavBar = () => {
    return <nav className={classes.container}>
        <div  className={classes.navContainer}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profil</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
        </div>
    </nav>
}