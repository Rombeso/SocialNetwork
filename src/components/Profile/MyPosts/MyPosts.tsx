import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {massageMyPostPropsType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import userPhoto from "../../../assets/images/pngwing.com.png";
import {reset} from 'redux-form';
import {useDispatch} from "react-redux";

type SomePT = {
    massageMyPost: Array<massageMyPostPropsType>
    newPostText: string
    addPost: (value: any) => void
    profile: any
    login: string | null
}

export const MyPosts = (props: SomePT) => {

    let addNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }
    const dispatch = useDispatch()
    dispatch(reset('myPostAddNewForm'));

    return (
        <>
            <div className={s.postBlock}>

                <div className={s.addPosts}>
                    <div className={s.userPhoto}>
                        <img
                            src={props.profile.photos.large || userPhoto}/>
                    </div>
                    <div className={s.fieldBlock}>
                    <AddNewPostReduxForm onSubmit={addNewPost} />
                    </div>
                </div>
            </div>
            <div className={s.postBlock}>
                <div className={s.myPostsBlock}>
                    <div className={s.myPostsTitle}>All entries</div>
                    <div className={s.line}></div>
                    <Post massageMyPost={props.massageMyPost}
                          profile={props.profile}
                    login={props.login}
                    />
                </div>
            </div>
        </>
    )
}

type FormDataType = {
    newPostText: string
}

const maxLength100 = maxLengthCreator(100)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    placeholder={'What\'s new with you?'}
                    component={Textarea}
                    validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button className={s.fieldButton}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'myPostAddNewForm'})(AddNewPostForm)