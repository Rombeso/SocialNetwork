import React from "react";
import classes from './Profile.module.css'
import {DispatchActionType, massageMyPostPropsType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type MassageMyPostPropsType = {
    // massageMyPost: Array<massageMyPostPropsType>
    // newPostText:string
    // dispatch: (action: DispatchActionType)=>void
}


export const Profile = (props: MassageMyPostPropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                // massageMyPost={props.massageMyPost}
                //      newPostText={props.newPostText}
                     // dispatch={props.dispatch}
            />
        </div>)
}