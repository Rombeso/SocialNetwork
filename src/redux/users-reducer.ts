import {userAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURREN_PAGE = 'SET_CURREN_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState: ProfileStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [],
}

const usersReducer = (state: ProfileStateType = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: true} )
                // users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: false} )
                // users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload.users]
            }
        case SET_CURREN_PAGE:
            return {
                ...state, currentPage: action.payload.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.payload.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.payload.isFetching
                        ? [...state.followingInProgress, action.payload.userId]
                        : [state.followingInProgress.filter(id => id != action.payload.userId)]
            }
        default:
            return state;
    }

}

export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {userId,}
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {userId,}
    } as const
}
export const setUsers = (users: Array<usersType>) => {
    return {
        type: SET_USERS,
        payload: {users,}
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURREN_PAGE,
        payload: {currentPage,}
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {totalUsersCount,}
    } as const

}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {isFetching,}
    } as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {isFetching, userId}
    } as const
}

export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        const response = await userAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount))
    }
}
export const onPageChangedThunkCreator = (pageNumber: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        const response = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.items))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionType>,
                                  userId: number,
                                  apiMethod: any,
                                  actionCreator: any
) => {
    dispatch(toggleFollowingInProgress(true, userId))
    const response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        let apiMethod = userAPI.follow.bind(userAPI)
        let actionCreator = followSuccess
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        let apiMethod = userAPI.unfollow.bind(userAPI)
        let actionCreator = unfollowSuccess
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}

export type ActionType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleFollowingInProgressType
export type FollowActionType = ReturnType<typeof followSuccess>
export type UnfollowActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingInProgressType = ReturnType<typeof toggleFollowingInProgress>
export type ProfileStateType = {
    users: Array<usersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<any>,
}
export type usersType = {
    id: number,
    photos: { small: string },
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
}
type LocationType = {
    city: string,
    country: string,
}

export default usersReducer