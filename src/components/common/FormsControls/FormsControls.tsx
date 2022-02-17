import React from "react";
import styles from './FormsControls.module.css'

const FormControl: React.FC<any> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {/*<textarea {...input} {...props} />*/}
                {props.children}
            </div>
            {hasError && <span> {meta.error}</span>}
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