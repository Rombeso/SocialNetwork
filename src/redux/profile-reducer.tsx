import {DispatchActionType, massageMyPostPropsType} from "./state";


type StateType = {
    newPostText: string
    massageMyPost: Array<massageMyPostPropsType>
}
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state: StateType, action: DispatchActionType) => {
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

export default profileReducer