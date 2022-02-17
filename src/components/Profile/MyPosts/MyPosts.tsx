import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {massageMyPostPropsType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type SomePT = {
    massageMyPost: Array<massageMyPostPropsType>
    newPostText: string
    addPost: (value: any) => void
}

export const MyPosts = (props: SomePT) => {

    let addNewPost = (value: any) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div className={classes.posts}>
                <AddNewPostReduxForm onSubmit={addNewPost}/>
                <Post massageMyPost={props.massageMyPost}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    placeholder={'Enter your massage'}
                    component={Textarea}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
  }

const AddNewPostReduxForm = reduxForm<FormDataType>({form: 'myPostAddNewForm'})(AddNewPostForm)