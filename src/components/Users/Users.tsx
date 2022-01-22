import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/pngwing.com.png";
import {usersType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type PropsType = {
    onPageChanged: (p: number) => void
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = (props.currentPage < 6 ? 1 : props.currentPage - 5); i <= props.currentPage + 5 && i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            className={props.currentPage === p ? styles.selectedPage + ' ' + styles.page : styles.page}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</span>
                    )
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
    <span>
        <div>
            <NavLink to={'/profile/' + u.id} >
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </NavLink>
        </div>
        <div>
            {u.followed
                ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}

        </div>
    </span>
                    <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </span>
    </span>
                </div>)}
        </div>
    )
}