import React from "react";
import {usersType} from "../../redux/users-reducer";
import {User} from "./User";


type PropsType = {
    users: Array<usersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<any>,
}

export const Friends = ({
                          users,
                          follow,
                          unfollow,
                          followingInProgress,
                          ...props
                      }: PropsType) => {
    return (
        <div>
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