import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStateType, ProfileType} from "../../redux/profile-reducer";

type MassageMyPostPropsType = {
    profile: ProfileType
}


export const Profile = (props: MassageMyPostPropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // massageMyPost={props.massageMyPost}
                //      newPostText={props.newPostText}
                     // dispatch={props.dispatch}
            />
        </div>)
}