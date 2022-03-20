import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReducerRootType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?: string | null
}

type PropsType = InjectedFormProps<FormDataType> & any
// React.FC<InjectedFormProps<FormDataType>>
const LoginForm  = (props: PropsType) => {
    const { handleSubmit, error, captchaUrl} = props
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", 'captchaUrl', Input, [required] )}
            {error && <div className={style.formSummeryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    // @ts-ignore
    return <div>

        <h1>Login</h1>
        {/*// @ts-ignore*/}
        <LoginReduxForm onSubmit={onSubmit}  captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: ReducerRootType): any => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)