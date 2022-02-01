import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/pngwing.com.png";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = {
    onPageChanged: (p: number) => void
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<any>,
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
            <NavLink to={'/profile/' + u.id}>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
            </NavLink>
        </div>
        <div>
            {u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingInProgress(true, u.id)
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'd6f0e227-87d6-4128-94b7-d0624916d5da',
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollow(u.id)
                            }
                            props.toggleFollowingInProgress(false, u.id)
                        })
                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingInProgress(true, u.id)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'd6f0e227-87d6-4128-94b7-d0624916d5da',
                        }
                    })
                        .then(response => {
                            if (response.data.resultCode == 0) {
                                props.follow(u.id)
                            }
                            props.toggleFollowingInProgress(false, u.id)
                        })
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