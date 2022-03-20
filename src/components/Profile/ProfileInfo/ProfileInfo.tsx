import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/pngwing.com.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formDataProfile: FormProfileDataType)=>any
}

export const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile}: PropsType) => {
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formDataProfile: FormProfileDataType) => {
       saveProfile(formDataProfile).then(
           ()=> {
               setEditMode(false)
           }
       )
    }

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt=""/>
                <div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile}  onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
}

type PropsProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: ()=>void
}

const ProfileData = ({profile, isOwner, goToEditMode}: PropsProfileDataType) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <p><b>Full name:</b> {profile.fullName}</p>
            <p><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</p>
            {profile.lookingForAJob &&
            <p><b>My professional skills:</b> {profile.lookingForAJobDescription}</p>
            }
            <p><b>About me:</b> {profile.aboutMe}</p>
            <div className={classes.contacts}><b>Contacts:</b>
                <p><b>Facebook:</b> {profile.contacts.facebook}</p>
                <p><b>Website:</b> {profile.contacts.website}</p>
                <p><b>VK:</b> {profile.contacts.vk}</p>
            </div>
        </div>
    )
}
