import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {ReducerRootType} from './redux-store'
import {FormErrors, stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

export type AuthType = {
    resultCode: number | null
    messages: []
    data: AuthDataType
}
export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';


let initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: AuthDataType = initialState, action: ActionType): AuthDataType => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export type ActionType = SetUserDataActionType

export type SetUserDataActionType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, login, email, isAuth}
    } as const
}

export const getAuthUsersData = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
}
type ThunkType = ThunkAction<void, ReducerRootType, unknown, ActionType>;


export const login = (email:string, password:string, rememberMe: boolean): ThunkType => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUsersData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error!'
                let action: any = stopSubmit('login', {_error: message})
                dispatch(action)
            }
        })
}

export const logout = () => (dispatch: Dispatch<ActionType>) => {

    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer

