import React from "react";
import classes from './Profile.module.css'
import {massageMyPostPropsType} from "./../../redux/state";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

type MassageMyPostPropsType = {
    massageMyPost: Array<massageMyPostPropsType>
    addPost: () => void;
    updateNewPostText: (newText: string)=> void
    newText:string
}


export const Profile = (props: MassageMyPostPropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts massageMyPost={props.massageMyPost}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newText={props.newText}
            />
        </div>)
}