import React from "react";
import { DispatchActionType, massageMyPostPropsType} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC, ProfileStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReducerType} from "../../../redux/redux-store";
import {DialogStateType} from "../../../redux/dialogs-reducer";

type SomePT = {
    // massageMyPost: Array<massageMyPostPropsType>
    // newPostText:string
    // dispatch: (action: DispatchActionType)=>void
    // addPost: () => void;
    // updateNewPostText: (newText: string)=> void
}

export const MyPostsContainer = (props: SomePT) => {
    let profilePage =  useSelector<ReducerType, ProfileStateType>(state => state.profilePage)
    let dispatch = useDispatch();
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        // if (newPostElement.current) {
            //let text = newPostElement.current.value
            // props.addPost()
            // props.dispatch({type: "ADD_POST" })
            // props.dispatch(addPostAC())
            dispatch(addPostAC())
        // }
    }

    let onPostChange = (text: string) => {
        //if (newPostElement.current) {
        // let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text })
        // props.dispatch(updateNewPostTextAC(text))
        dispatch(updateNewPostTextAC(text))
        //}
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     massageMyPost={profilePage.massageMyPost}
                     newPostText={profilePage.newPostText}/> )
}