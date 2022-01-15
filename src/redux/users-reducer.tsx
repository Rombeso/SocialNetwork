export type ProfileStateType = {
    users: Array<usersType>
}

export type usersType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
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


let initialState: ProfileStateType = {
    users: [],

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
                users: [...state.users, ...action.payload.users]
            }
        default:
            return state;
    }

}

export type ActionType = FollowActionType | UnfollowActionType | SetUsersActionType


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

export default usersReducer