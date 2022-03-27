import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators";
import {connect, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {ReducerRootType} from "../../redux/redux-store";
import s from '../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl?: string | null
}

type PropsType = InjectedFormProps<FormDataType> & any
// React.FC<InjectedFormProps<FormDataType>>
const LoginForm = (props: PropsType) => {
    const {handleSubmit, error, captchaUrl} = props
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", 'captchaUrl', Input, [required])}
            {error && <div className={s.formSummeryError}>
                {error}
            </div>}
            <div>
                <button className={s.loginBottom}>Login</button>
            </div>
        </form>
    )

}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {
const isAuth = useSelector<ReducerRootType, boolean>(state => state.auth.isAuth)
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.loginContainer}>

        <div className={s.title}>Sign In</div>
        <p>login: larionovra@gmail.com</p>
        <p>password: qwerty1234</p>
        {/*// @ts-ignore*/}
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state: ReducerRootType): any => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login)