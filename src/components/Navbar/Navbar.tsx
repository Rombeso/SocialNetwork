import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

export const NavBar = () => {
    return <nav className={s.container}>
        <div className={s.navContainer}>
            <div className={s.item}>
                <div className={s.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>

            </div>
            {/*<div className={s.item}>*/}
            {/*    <div className={s.icon}>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"*/}
            {/*             stroke="currentColor" stroke-width="2">*/}
            {/*            <path stroke-linecap="round" stroke-linejoin="round"*/}
            {/*                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={s.item}>
                <div className={s.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </div>
                <div>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </div>

            </div>
            <div className={s.item}>
                <div className={s.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </div>
                <div>
                    <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                </div>
            </div>
            <div className={s.line}>
            </div>
            <div className={s.footer}>
                <div>
                    <a href="#">
                        Write to developer
                    </a>
                </div>
            </div>
            {/*<div className={classes.item}>*/}
            {/*    <NavLink to='/news' activeClassName={classes.active}>News</NavLink>*/}
            {/*</div>*/}
            {/*<div className={classes.item}>*/}
            {/*    <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>*/}
            {/*</div>*/}
            {/*<div className={classes.item}>*/}
            {/*    <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>*/}
            {/*</div>*/}
        </div>
    </nav>
}