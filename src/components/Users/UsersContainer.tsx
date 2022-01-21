import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
import {
    followAC, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC, usersType
} from "../../redux/users-reducer";
import { Dispatch } from "redux";

type MapStateType = {
    users: Array<usersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void

}

export type UsersPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);