import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileStateType, ProfileType} from "../../redux/profile-reducer";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm";

type MassageMyPostPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File)=>void
    saveProfile: (profile: FormProfileDataType)=>void
}

export const Profile = (props: MassageMyPostPropsType) => {
    return (
        <>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
            />
        </>)
}