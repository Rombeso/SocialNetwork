import {ReducerRootType} from "./redux-store";

export const getUsers = (state: ReducerRootType) => {
    return state.usersPage.users
}
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