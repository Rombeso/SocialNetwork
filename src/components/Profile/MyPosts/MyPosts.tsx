import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {massageMyPostPropsType} from "../../../redux/state";

// type MassageMyPostPropsType = {
//     massage: string,
//     likesCounter: string
//     id?: string
// }

type SomePT = {
    massageMyPost: Array<massageMyPostPropsType>
    addPost: () => void;
    updateNewPostText: (newText: string)=> void
    newText:string
}

export const MyPosts = (props: SomePT) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {

        if (newPostElement.current) {
            // let text = newPostElement.current.value
            props.addPost()
        }
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
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