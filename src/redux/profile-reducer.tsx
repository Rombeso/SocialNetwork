import {addPostAC, DispatchActionType, massageMyPostPropsType, updateNewPostTextAC} from "./store";


export type ProfileStateType = {
    newPostText: string
    massageMyPost: Array<massageMyPostPropsType>
}
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    massageMyPost: [
        {id: '1', massage: 'Hi, how are you?', likesCounter: '5'},
        {id: '2', massage: "It's my first post", likesCounter: '12'}
    ],
    newPostText: 'it-kamasutra.com'

}

const profileReducer = (state: ProfileStateType = initialState, action: DispatchActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: massageMyPostPropsType = {
                id: '5',
                massage: state.newPostText,
                likesCounter: '0'
            }
            state.massageMyPost.push(newPost);
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>



export default profileReducer