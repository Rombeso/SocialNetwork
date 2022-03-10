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
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error,...props}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], {type: 'password'})}
            {createField(null, 'rememberMe', Input, [], {type: 'checkbox'}, 'remember me')}

            {/*<div>*/}
            {/*    <Field placeholder={'Email'} name={'email'} component={Input}*/}
            {/*           validate={[required]}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field placeholder={'Password'} name={'password'} component={Input} type={'password'}*/}
            {/*           validate={[required]}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Field component={Input} name={'rememberMe'} type="checkbox"*/}
            {/*    /> remember me*/}
            {/*</div>*/}
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
        props.login(formData.email, formData.password, formData.rememberMe)
        debugger
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>

        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: ReducerRootType): any => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)