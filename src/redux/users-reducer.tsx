export type ProfileStateType = {
    users: Array<usersType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

export type usersType = {
    id: number,
    photos: { small: string },
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
type LocationType = {
    city: string,
    country: string
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURREN_PAGE = 'SET_CURREN_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState: ProfileStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,

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
        default:
            return state;
    }

}

export type ActionType = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageType | SetTotalUsersCountType


export type FollowActionType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {userId,}
    } as const
}

export type UnfollowActionType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {userId,}
    } as const
}

export type SetUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<usersType>) => {
    return {
        type: SET_USERS,
        payload: {users,}
    } as const
}
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURREN_PAGE,
        payload: {currentPage,}
    } as const
}
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {totalUsersCount,}
    } as const
}

export default usersReducer