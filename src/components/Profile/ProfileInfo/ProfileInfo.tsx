import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/pngwing.com.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formDataProfile: FormProfileDataType) => any
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
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <>
            <div className={s.centerContainer}>
                <div className={s.imageBlock}>
                    <img src={profile.photos.large || userPhoto}/>
                    <div>
                        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    </div>
                </div>
                <div className={s.friendsBlock}>
                    Friends
                </div>
            </div>

            <div className={s.rightContainer}>
                <div className={s.descriptionBlock}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    {editMode
                        ? <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}
                </div>
                <div className={s.myPhotosBlock}>
                    My Photos
                </div>
                <div className={s.myPostsBlock}>
                    <MyPostsContainer/>
                </div>
            </div>


        </>
    )
}

type PropsProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = ({profile, isOwner, goToEditMode}: PropsProfileDataType) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <p><b>Full name:</b> {profile.fullName}</p>
            <p><b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}</p>
            {profile.lookingForAJob &&
            <p><b>My professional skills:</b> {profile.lookingForAJobDescription}</p>
            }
            <p><b>About me:</b> {profile.aboutMe}</p>
            <div className={s.contacts}><b>Contacts:</b>
                <p><b>Facebook:</b> {profile.contacts.facebook}</p>
                <p><b>Website:</b> {profile.contacts.website}</p>
                <p><b>VK:</b> {profile.contacts.vk}</p>
            </div>
        </div>
    )
}
