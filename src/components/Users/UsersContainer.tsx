import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
import {
    followAC,
    setUsersAC,
    unfollowAC, usersType
} from "../../redux/users-reducer";
import { Dispatch } from "redux";

type MapStateType = {
    users: Array<usersType>
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
}

export type UsersPropsType = MapStateType & MapDispatchType

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        users: state.usersPage.users
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);