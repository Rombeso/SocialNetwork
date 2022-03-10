import React from "react";
import classes from './ProfileInfo.module.css'
import {ProfileStateType, ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, updateStatus, status}: PropsType) => {
     if (!profile) {
         return <Preloader/>
     }
    return (
    <div>
        <div >
            <img className={classes.image} src='https://myrzik.com/wp-content/uploads/2012/11/0585.jpg'></img>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
            <p>{'Full name: ' +  profile.fullName}</p>
            <p>{'About me: ' +  profile.aboutMe}</p>
        </div>
    </div>
    )
}