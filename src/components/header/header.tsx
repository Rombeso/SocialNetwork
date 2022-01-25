import React from "react";
import { NavLink } from "react-router-dom";
import classes from './header.module.css'

type PropsType = {
    login: string
    isAuth: boolean
}

export const Header = (props: PropsType) => {
    return <header className={classes.header}>

        <img src='https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black.png'></img>
        <div className={classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}