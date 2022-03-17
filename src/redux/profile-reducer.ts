import {massageMyPostPropsType} from "./store";
import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
    massageMyPost: [
        {id: '1', massage: 'Hi, how are you?', likesCounter: '5'},
        {id: '2', massage: "It's my first post", likesCounter: '12'}
    ],
    newPostText: 'it-kamasutra.com',
    profile: '',
    status: '',
}

const profileReducer = (state: ProfileStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: massageMyPostPropsType = {
                id: '5',
                massage: action.newPostText,
                likesCounter: '0'
            }
            state.massageMyPost.push(newPost);
            return {...state, massageMyPost: [...state.massageMyPost]};
        case SET_STATUS:
            return {...state, status: action.payload.status};

        case SET_USER_PROFILE:
            return {...state, profile: {...action.payload.profile}};
        case DELETE_POST:
            return {...state, massageMyPost: state.massageMyPost.filter(p => p.id != action.postId)};

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.payload.photo}};
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText,

    } as const
}
export const deletePostAC = (postId: string) => {
    return {
        type: DELETE_POST,
        postId: postId,

    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {profile}
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {status}
    } as const
}
export const savePhotoSuccess = (photo: File) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        payload: {photo}
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));

}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    const response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch<ActionType>) => {
    const response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

type ActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType | DeletePostActionType
| SavePhotoSuccessActionType
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type DeletePostActionType = ReturnType<typeof deletePostAC>
export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetStatusActionType = ReturnType<typeof setStatus>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>

export type ProfileType = {
    aboutMe: string
    fullName: string
    photos: { large: string, small: string }
}
export type ProfileStateType = {
    newPostText: string,
    massageMyPost: Array<massageMyPostPropsType>,
    profile: any,
    status: string,
}

export default profileReducer