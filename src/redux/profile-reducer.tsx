import {DispatchActionType, massageMyPostPropsType} from "./store";
import {profileAPI, userAPI} from "../api/api";
import {Dispatch} from "redux";

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
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
            // return {...state, newPostText: '', massageMyPost: [newPost, ...state.massageMyPost]};
        // case UPDATE_NEW_POST_TEXT:
        //     return {...state, newPostText: action.newText};
        case SET_STATUS:
            return {...state, status: action.payload.status};

        case SET_USER_PROFILE:
            return {...state, profile: {...action.payload.profile}};

        default:
            return state;
    }

}

type ActionType = AddPostActionType | SetUserProfileActionType | SetStatusActionType

export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText,

    } as const
}
// export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
// export const updateNewPostTextAC = (newText: string) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: newText
//     } as const
// }

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {profile}
    } as const
}
export type SetStatusActionType = ReturnType<typeof setStatus>
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {status}
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    return userAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    return profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ActionType>) => {
    return profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}


export default profileReducer