import {authAPI} from "../api/api";
import {Dispatch} from "redux";

export type AuthType = {
    resultCode: number | null
    messages: []
    data: DataType
}
export type DataType = {
    userId: number | null
    email: string
    login: string
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';


let initialState: DataType = {
    userId: null,
    email: '',
    login: '',
    isAuth: false,

}

const authReducer = (state: DataType = initialState, action: ActionType): DataType => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state;
    }

}

export type ActionType = SetUserDataActionType

export type SetUserDataActionType = ReturnType<typeof setUserData>
export const setUserData = (userId: number, login: string, email: string ) => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email }
    } as const
}

export const getAuthUsersData = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserData(id, login, email))
            }
        })
}

export default authReducer