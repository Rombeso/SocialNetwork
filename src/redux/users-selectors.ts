import {ReducerRootType} from "./redux-store";
import {createSelector} from "reselect";

export const getUsersSelector = (state: ReducerRootType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true)
    }
)
export const getPageSize = (state: ReducerRootType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: ReducerRootType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: ReducerRootType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: ReducerRootType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: ReducerRootType) => {
    return state.usersPage.followingInProgress
}