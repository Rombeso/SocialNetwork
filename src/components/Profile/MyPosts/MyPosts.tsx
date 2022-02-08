import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import { massageMyPostPropsType} from "../../../redux/store";


type SomePT = {
    massageMyPost: Array<massageMyPostPropsType>
    newPostText:string
    updateNewPostText: (text:string) =>void
    addPost:()=>void
}

export const MyPosts = (props: SomePT) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {

        if (newPostElement.current) {
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
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>

                <Post massageMyPost={props.massageMyPost}/>
            </div>
        </div>
    )
}