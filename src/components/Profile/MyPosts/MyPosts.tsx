import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostAC, DispatchActionType, massageMyPostPropsType, updateNewPostTextAC} from "../../../redux/store";
import {useDispatch} from "react-redux";

// type MassageMyPostPropsType = {
//     massage: string,
//     likesCounter: string
//     id?: string
// }

type SomePT = {
    massageMyPost: Array<massageMyPostPropsType>
    // addPost: () => void;
    // updateNewPostText: (newText: string)=> void
    newPostText:string
    // dispatch: (action: DispatchActionType)=>void
}

export const MyPosts = (props: SomePT) => {
    let dispatch=useDispatch();
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if (newPostElement.current) {
            // let text = newPostElement.current.value
            // props.addPost()
            // props.dispatch({type: "ADD_POST" })
            // props.dispatch(addPostAC())
            dispatch(addPostAC())
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            // props.updateNewPostText(text);
            // props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text })
            // props.dispatch(updateNewPostTextAC(text))
            dispatch(updateNewPostTextAC(text))
        }
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                <Post massageMyPost={props.massageMyPost}/>
            </div>
        </div>
    )
}