import React from "react";
import {usersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


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

export const Users = ({
                          pageSize,
                          totalUsersCount,
                          onPageChanged,
                          currentPage,
                          users,
                          follow,
                          unfollow,
                          followingInProgress,
                          toggleFollowingInProgress,
                          ...props
                      }: PropsType) => {
    return (
        <div>
            <Paginator onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount}
                       currentPage={currentPage}/>
            <div>
                {
                    users.map(u => <User user={u} key={u.id} follow={follow} unfollow={unfollow}
                                         followingInProgress={followingInProgress}/>
                    )}
            </div>
        </div>
    )
}