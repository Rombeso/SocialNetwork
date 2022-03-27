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
import photo1 from './../../../assets/photos/1.jpg'
import photo2 from './../../../assets/photos/2.jpg'
import photo3 from './../../../assets/photos/3.jpg'

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
                        <p className={s.myPhotosTitle}>My photos <span>4</span></p>
                        <div className={s.photos}>
                            <div>
                                <img src={profile.photos.large || userPhoto}/>
                            </div>
                            <div>
                                <img src={photo1}/>
                            </div>
                            <div>
                                <img src={photo2}/>
                            </div>
                            <div>
                                <img src={photo3}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className={s.myPostsContainer}>*/}
                {/*    <div className={s.myPostsBlock}>*/}
                        <MyPostsContainer login={login}/>
                    {/*</div>*/}

                {/*</div>*/}
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
        <>
            <div className={s.profileBodyTitle}>
                <p>Full name:</p>
                <p>Looking for a job:</p>
                <p>My professional skills:</p>
                <p>About me:</p>
                <div><p className={s.contactsTitle}>Contacts</p></div>
                <p>Facebook:</p>
                <p>Website:</p>
                <p>VK:</p>
            </div>
            <div className={s.profileBodyDescription}>
                <p>{profile.fullName}</p>
                <p> {profile.lookingForAJob ? 'yes' : 'no'}</p>
                {profile.lookingForAJob &&
                <p> {profile.lookingForAJobDescription}</p>
                }
                <p> {profile.aboutMe}</p>
                <div className={s.line}></div>
                <p> {profile.contacts.facebook}</p>
                <p>{profile.contacts.website}</p>
                <p>{profile.contacts.vk}</p>
            </div>

            {isOwner && <div>
                <button onClick={goToEditMode} className={s.profileBodyButton}>Edit profile</button>
            </div>}
        </>
    )
}
