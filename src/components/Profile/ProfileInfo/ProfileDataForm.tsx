import React from "react";
import {ProfileType} from "../../../redux/profile-reducer";
import classes from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators";
import {InjectedFormProps, reduxForm} from "redux-form";

export type FormProfileDataType = {
    fullName: string
    lookingForAJob:boolean
    lookingForAJobDescription: string
    aboutMe: string

}

const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = ({handleSubmit, error,...props}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            <p><b>Full name:</b> {createField('Full name', 'fullName', Input, [])}</p>
            <p><b>Looking for a job:</b> {createField('', 'lookingForAJob', Input, [], {type: 'checkbox'})}</p>
            <p><b>My professional skills:</b> {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}</p>
            <p><b>About me:</b> {createField('About me', 'aboutMe', Input, [])}</p>
            {/*<div className={classes.cotact}><b>Contacts:</b>*/}
            {/*    {Object.keys(profile.contacts).map((k) => {*/}
            {/*        return <div>*/}
                        {/*// @ts-ignore*/}
            {/*            {<p><b>{k}:</b> {profile.contacts[k]}</p>}*/}
            {/*        </div>*/}
            {/*    })}*/}
            {/*</div>*/}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<FormProfileDataType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm