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

export const ProfileInfo = (props: PropsType) => {
     if (!props.profile) {
         return <Preloader/>
     }
    return (
    <div>
        <div >
            <img className={classes.image} src='https://myrzik.com/wp-content/uploads/2012/11/0585.jpg'></img>
        </div>
        <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={props.status}  updateStatus={props.updateStatus}/>
            <p>{'Full name: ' +  props.profile.fullName}</p>
            <p>{'About me: ' +  props.profile.aboutMe}</p>
        </div>
    </div>
    )
}