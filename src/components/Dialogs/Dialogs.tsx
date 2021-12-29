import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import {Massage} from "./Massage/Massage";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    dialogDatPropsType,
    massageDataPropsType,
} from "../../redux/store";
import {useDispatch} from "react-redux";
import {addMassageAC, updateNewMassageTextAC} from "../../redux/dialogs-reducer";

type MassageDialogPropsType = {
    dialogDat: Array<dialogDatPropsType>,
    massageData: Array<massageDataPropsType>
    newMassageText: string
    // dispatch: (action: DispatchActionType)=>void
    addMassage: ()=>void
    messageChange: (text:string)=>void
}

export const Dialogs = (props: MassageDialogPropsType) => {
    let dispatch=useDispatch();
    const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const onAddMassage = () => {
        if (newMassageElement.current) {
            // props.dispatch(addMassageAC())
            // dispatch(addMassageAC())
            props.addMassage()
        }
    }

    const onMessageChange = () => {
        if (newMassageElement.current) {
            let text = newMassageElement.current.value
            // props.dispatch(updateNewMassageTextAC(text))
            // dispatch(updateNewMassageTextAC(text))
            props.messageChange(text)
        }
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem dialogDat={props.dialogDat} />
            </div>
            <div className={classes.massages}>
                <Massage massageData={props.massageData} />
                <div>
                    <textarea onChange={onMessageChange} ref={newMassageElement} value={props.newMassageText}></textarea>
                    <button onClick={onAddMassage}>Add massage</button>
                </div>
            </div>
        </div>

    )

}