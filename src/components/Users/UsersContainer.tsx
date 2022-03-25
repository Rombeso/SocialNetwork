import React from "react";
import {connect} from "react-redux";
import {ReducerRootType} from "../../redux/redux-store";
import {
    setCurrentPage,
    toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    usersType,
    toggleFollowingInProgress,
    getUsersThunkCreator,
    onPageChangedThunkCreator,
    follow, unfollow
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PathParamsType} from "../Profile/ProfileContainer";
import {Friends} from "./Friends";
import {FriendsForProfile} from "./FriendsForProfile";

type MapStateType = {
    users: Array<usersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>,
}

type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    onPageChangedThunkCreator: (pageNumber: number, pageSize: number) => void
}

export type UsersPropsType = MapStateType & MapDispatchType & RouteComponentProps<PathParamsType>

class UsersContainer extends React.PureComponent<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        if (this.props.match.url == '/friends' || this.props.match.url == '/profile') {
            this.props.getUsersThunkCreator(1, 100)
        } else {
        this.props.getUsersThunkCreator(currentPage, pageSize)
        }
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.onPageChangedThunkCreator(pageNumber, pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            {this.props.match.url === '/users' &&
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}

            />}
            {this.props.match.url === '/friends' && <Friends
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />}
            {this.props.match.url === '/profile' && <FriendsForProfile
                users={this.props.users}
            />}
        </>
    }
}

const mapStateToProps = (state: ReducerRootType): MapStateType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress,
        getUsersThunkCreator,
        onPageChangedThunkCreator,
    }), withRouter,
)(UsersContainer)