import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {ReducerRootType} from './redux-store'
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state: AuthDataType = initialState, action: ActionType): AuthDataType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, login, email, isAuth}
    } as const
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaUrl}
    } as const
}

export const getAuthUsersData = () => async (dispatch: Dispatch<ActionType>) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string): ThunkType => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captchaUrl)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUsersData())
        dispatch(getCaptchaUrlSuccess(null))
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error!'
        let action: any = stopSubmit('login', {_error: message})
        dispatch(action)
    }
}
export const logout = () => async (dispatch: Dispatch<ActionType>) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<ActionType>) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

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
    captchaUrl?: string | null
}
type ThunkType = ThunkAction<void, ReducerRootType, unknown, ActionType>;
export type ActionType = SetUserDataActionType | GetCaptchaUrlSuccessActionType
export type SetUserDataActionType = ReturnType<typeof setAuthUserData>
export type GetCaptchaUrlSuccessActionType = ReturnType<typeof getCaptchaUrlSuccess>

export default authReducer

