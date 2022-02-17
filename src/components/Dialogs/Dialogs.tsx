import React from "react";
import classes from './Dialogs.module.css'
import {Massage} from "./Massage/Massage";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    dialogDatPropsType,
    massageDataPropsType,
} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators";

type MassageDialogPropsType = {
    dialogDat: Array<dialogDatPropsType>,
    massageData: Array<massageDataPropsType>
    addMassage: (value: any) => void
    isAuth: boolean
}

export const Dialogs = (props: MassageDialogPropsType) => {

    const addNewMessage = (value: any) => {

        props.addMassage(value.newMassageText)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem dialogDat={props.dialogDat}/>
            </div>
            <div className={classes.massages}>
                <Massage massageData={props.massageData}/>
                <AddMassageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type FormDataType = {
    newMassageText: string
}
const maxLength50 = maxLengthCreator(50)
const AddMassageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMassageText'}
                       placeholder={'Enter your massage'}
                       component={Textarea}
                       validate={[required, maxLength50]}
                />
            </div>
            <div>
                <button>Send massage</button>
            </div>

        </form>
    )
}

const AddMassageReduxForm = reduxForm<FormDataType>({form: 'dialogAddMassageForm'})(AddMassageForm)