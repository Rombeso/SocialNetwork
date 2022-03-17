import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileStateType, ProfileType} from "../../redux/profile-reducer";

type MassageMyPostPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File)=>void
}


export const Profile = (props: MassageMyPostPropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer
            />
        </div>)
}