import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ContactsType, ProfileType} from "../../../redux/profile-reducer";
import classes from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";


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
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            <p><b>Full name:</b> {createField('Full name', 'fullName', Input, [])}</p>
            <p><b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}</p>
            <p><b>My professional skills:</b> {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</p>
            <p><b>About me:</b> {createField('About me', 'aboutMe', Input, [])}</p>
            <div className={classes.contact}><b>Contacts:</b>
                <p><b>Facebook:</b>{createField('Facebook', 'contacts.facebook', Input, [])}</p>
                <p><b>Website:</b>{createField('Web site', 'contacts.website', Input, [])}</p>
                <p><b>VK:</b>{createField('VK', 'contacts.vk', Input, [])}</p>
            </div>
            {error && <div className={style.formSummeryError}>
                {error}
            </div>}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm