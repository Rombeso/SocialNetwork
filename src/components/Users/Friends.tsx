import React from "react";
import {usersType} from "../../redux/users-reducer";
import {User} from "./User";
import {Redirect} from "react-router-dom";
import s from './users.module.css'


type PropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<any>,
    isAuth: boolean
}

export const Friends = ({
                          users,
                          follow,
                          unfollow,
                          followingInProgress,
                            isAuth,
                          ...props
                      }: PropsType) => {
    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={s.usersBlock}>
            <div>
                {
                    users.map(u => u.followed != false
                        ? <User user={u} key={u.id} follow={follow} unfollow={unfollow}
                                         followingInProgress={followingInProgress} />
                        : ''
                    )}
            </div>
        </div>
    )
}