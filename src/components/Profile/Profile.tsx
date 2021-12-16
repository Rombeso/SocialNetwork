import React from "react";
import classes from './Profile.module.css'
import {DispatchActionType, massageMyPostPropsType} from "./../../redux/state";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";

type MassageMyPostPropsType = {
    massageMyPost: Array<massageMyPostPropsType>
    newText:string
    dispatch: (action: DispatchActionType)=>void
}


export const Profile = (props: MassageMyPostPropsType) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts massageMyPost={props.massageMyPost}
                     newText={props.newText}
                     dispatch={props.dispatch}
            />
        </div>)
}