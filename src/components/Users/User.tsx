import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/pngwing.com.png";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    user: usersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<any>,
}

export const User = ({user, followingInProgress, unfollow, follow}: PropsType) => {
    return (
        <div>
    <span>
        <div>
            <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto}/>
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id)
                          }
                          }>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id)
                          }
                          }>Follow</button>}
        </div>
    </span>
            <span>
        <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </span>
    </span>
        </div>
)
}