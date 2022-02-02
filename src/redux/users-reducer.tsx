import {userAPI} from "../api/api";
import {Dispatch} from "redux";

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

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURREN_PAGE = 'SET_CURREN_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState: ProfileStateType = {
    users: [],
    pageSize: 5,
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
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
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
                        ? [...state.followingInProgress,  action.payload.userId]
                        : [state.followingInProgress.filter(id => id != action.payload.userId)]
            }
        default:
            return state;
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
export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {userId,}
    } as const
}

export type UnfollowActionType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {userId,}
    } as const
}

export type SetUsersActionType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<usersType>) => {
    return {
        type: SET_USERS,
        payload: {users,}
    } as const
}
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURREN_PAGE,
        payload: {currentPage,}
    } as const
}
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {totalUsersCount,}
    } as const

}
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {isFetching,}
    } as const
}

export type ToggleFollowingInProgressType = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        payload: {isFetching, userId}
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return  (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const onPageChangedThunkCreator = (pageNumber: number, pageSize: number) => {
    return  (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        userAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
        })
    }}

export const follow = (userId: number) => {
    return  (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFollowingInProgress(true, userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }}

export const unfollow = (userId: number) => {
    return  (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleFollowingInProgress(true, userId))
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }}
export default usersReducer