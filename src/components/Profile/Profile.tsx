import React from "react";
import classes from './Profile.module.css'
import {DispatchActionType, massageMyPostPropsType} from "../../redux/store";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

type MassageMyPostPropsType = {
    massageMyPost: Array<massageMyPostPropsType>
    newPostText:string
    // dispatch: (action: DispatchActionType)=>void
}


export const Profile = (props: MassageMyPostPropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts massageMyPost={props.massageMyPost}
                     newPostText={props.newPostText}
                     // dispatch={props.dispatch}
            />
        </div>)
}