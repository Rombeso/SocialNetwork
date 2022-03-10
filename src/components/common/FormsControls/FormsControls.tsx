import React, {FC, ReactElement} from "react";
import styles from './FormsControls.module.css'
import {required} from "../../../utils/validators";
import {Field} from "redux-form";

const FormControl: React.FC<any> = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {/*<textarea {...input} {...props} />*/}
                {children}
            </div>
            {hasError && <span> {error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}

export const Input: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

export const createField = (placeholder: string | null, name: string, component: any, validators: (any | undefined)[],  props = {}, text = "" ) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/> {text}
    </div>
)