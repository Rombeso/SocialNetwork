import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/pngwing.com.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import ProfileDataForm, {FormProfileDataType} from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {MyPostsContainer} from "../MyPosts/MyPostsContainer";
import UsersContainer from "../../Users/UsersContainer";
import {NavLink} from "react-router-dom";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formDataProfile: FormProfileDataType) => any
    login: string | null
}

export const ProfileInfo = ({profile, updateStatus, status, isOwner, savePhoto, saveProfile, login}: PropsType) => {
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
                    <div className={s.avatar}>
                        <img src={profile.photos.large || userPhoto}/>
                    </div>

                    {isOwner && <div className={s.avatarButton}>
                        <p>Edit avatar</p>
                        <input type={"file"} onChange={onMainPhotoSelected}/>
                    </div>}
                </div>

                <div className={s.friendsContainer}>
                    <div className={s.friendsTitle}>
                        <NavLink to={'/friends'}>Friends</NavLink>
                    </div>

                    <div className={s.friendBlock}>
                        <UsersContainer/>
                    </div>

                </div>
            </div>


            <div className={s.rightContainer}>
                <div className={s.descriptionBlock}>
                    <div className={s.profileBlock}>
                        <div className={s.profileHeaders}>
                            <div className={s.profileLogin}>{login}</div>
                            <div className={s.profileOnline}>online</div>
                        </div>
                        <div className={s.status}>
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                        </div>
                        <div className={s.line}></div>
                        <div className={s.profileBody}>
                            { editMode
                            ? <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit}/>
                            : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}

                        </div>

                    </div>
                </div>

                <div className={s.myPhotosContainer}>
                    <div className={s.myPhotosBlock}>
                        My Photos
                    </div>
                </div>

                <div className={s.myPostsContainer}>
                    <div className={s.myPostsBlock}>
                        <MyPostsContainer/>
                    </div>

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
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
        </div>
    )
}
