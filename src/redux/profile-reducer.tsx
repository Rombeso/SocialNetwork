import {DispatchActionType, massageMyPostPropsType} from "./store";

export type ProfileType = {
    aboutMe: string
    fullName: string
    photos: {large: string, small: string}
}

export type ProfileStateType = {
    newPostText: string,
    massageMyPost: Array<massageMyPostPropsType>,
    profile: any,
}
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    massageMyPost: [
        {id: '1', massage: 'Hi, how are you?', likesCounter: '5'},
        {id: '2', massage: "It's my first post", likesCounter: '12'}
    ],
    newPostText: 'it-kamasutra.com',
    profile: '',

}

const profileReducer = (state: ProfileStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: massageMyPostPropsType = {
                id: '5',
                massage: state.newPostText,
                likesCounter: '0'
            }
            return {...state, newPostText: '', massageMyPost: [newPost, ...state.massageMyPost]};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: {...action.payload.profile}};

        default:
            return state;
    }

}

type ActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {profile}
    } as const
}


export default profileReducer