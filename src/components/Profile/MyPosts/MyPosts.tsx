import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {DispatchActionType, massageMyPostPropsType} from "../../../redux/state";

// type MassageMyPostPropsType = {
//     massage: string,
//     likesCounter: string
//     id?: string
// }

type SomePT = {
    massageMyPost: Array<massageMyPostPropsType>
    // addPost: () => void;
    // updateNewPostText: (newText: string)=> void
    newText:string
    dispatch: (action: DispatchActionType)=>void
}

export const MyPosts = (props: SomePT) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if (newPostElement.current) {
            // let text = newPostElement.current.value
            // props.addPost()
            props.dispatch({type: "ADD_POST" })
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            // props.updateNewPostText(text);
            props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text })
        }
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newText}
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