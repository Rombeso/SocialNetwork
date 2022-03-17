import React, {ChangeEvent} from "react";
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/pngwing.com.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File)=>void
}

export const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto}: PropsType) => {
     if (!profile) {
         return <Preloader/>
     }

     const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files)  {
          savePhoto(e.target.files[0])
      }
     }
    return (
    <div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt=""/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status}  updateStatus={updateStatus}/>
            <p>{'Full name: ' +  profile.fullName}</p>
            <p>{'About me: ' +  profile.aboutMe}</p>
        </div>
    </div>
    )
}