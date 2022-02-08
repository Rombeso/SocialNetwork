import React from "react";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
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
import {withAuthRedirect} from "../../hok/withAuthRediirect";
import {compose} from "redux";

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
    getUsersThunkCreator:(currentPage: number, pageSize: number) => void
    onPageChangedThunkCreator:(pageNumber: number, pageSize: number) => void

}

export type UsersPropsType = MapStateType & MapDispatchType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.onPageChangedThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
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

            />
        </>
    }
}

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
 // let withRedirect = withAuthRedirect(UsersContainer)

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     toggleIsFetching,
//     toggleFollowingInProgress,
//     getUsersThunkCreator,
//     onPageChangedThunkCreator,
// })(withRedirect);

export default compose<React.ComponentType>(
    withAuthRedirect,
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
})
)(UsersContainer)