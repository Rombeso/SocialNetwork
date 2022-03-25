import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import classes from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";
import s from "./ProfileInfo.module.css";


export type FormProfileDataType = {
    fullName: string
    lookingForAJob:boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}


const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = ({handleSubmit, error, ...props}) => {

    // @ts-ignore
    return (
        <form onSubmit={handleSubmit} className={s.formSubmit}>
            {/*<div className={s.profileBodyTitle}>*/}
            {/*    <p>Full name:</p>*/}
            {/*    <p>Looking for a job:</p>*/}
            {/*    <p>My professional skills:</p>*/}
            {/*    <p>About me:</p>*/}
            {/*    <div className={s.contacts}><b>Contacts:</b></div>*/}
            {/*    <p>Facebook:</p>*/}
            {/*    <p>Website:</p>*/}
            {/*    <p>VK:</p>*/}
            {/*</div>*/}
            {/*<div className={s.profileBodyDescription}>*/}
            {/*    <p>{createField('Full name', 'fullName', Input, [])}</p>*/}
            {/*    <p> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}</p>*/}
            {/*    <p> {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</p>*/}
            {/*    <p> {createField('About me', 'aboutMe', Input, [])}</p>*/}
            {/*    <p> {createField('Facebook', 'contacts.facebook', Input, [])}</p>*/}
            {/*    <p>{createField('Web site', 'contacts.website', Input, [])}</p>*/}
            {/*    <p>{createField('VK', 'contacts.vk', Input, [])}</p>*/}
            {/*</div>*/}

            <p><b>Full name:</b> {createField('Full name', 'fullName', Input, [])}</p>
            <p><b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}</p>
            <p><b>My professional skills:</b> {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</p>
            <p><b>About me:</b> {createField('About me', 'aboutMe', Input, [])}</p>
            <p><b>Facebook:</b>{createField('Facebook', 'contacts.facebook', Input, [])}</p>
            <p><b>Website:</b>{createField('Web site', 'contacts.website', Input, [])}</p>
            <p><b>VK:</b>{createField('VK', 'contacts.vk', Input, [])}</p>
            {error && <div className={style.formSummeryError}>
                {error}
            </div>}
            <div className={s.divBodyButton}><button className={s.profileBodyButton}>Save</button></div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm