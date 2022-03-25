import React from "react";
import {usersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/pngwing.com.png";
import s from './FriendsForProfile.module.css'

type PropsType = {
    users: Array<usersType>
}

export const FriendsForProfile = ({
                          users,
                      }: PropsType) => {
    return (
            <>
                {
                    users.map((u , index)=> u.followed != false
                        ? <div key={u.id} className={s.friendBlock}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                                <div className={s.userName}>{u.name}</div>
                            </NavLink>
                        </div>
                        : ''
                    )}
            </>
    )
}