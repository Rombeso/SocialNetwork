import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm";
import {Redirect} from "react-router-dom";

type MassageMyPostPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File)=>void
    saveProfile: (profile: FormProfileDataType)=>void
    login:string | null
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
                         login={props.login}
            />
        </>)
}