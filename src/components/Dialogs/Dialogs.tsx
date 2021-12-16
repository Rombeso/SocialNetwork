import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import {Massage} from "./Massage/Massage";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    addMassageAC,
    dialogDatPropsType,
    DispatchActionType,
    massageDataPropsType,
    updateNewMassageTextAC
} from "../../redux/state";

type MassageDialogPropsType = {
    dialogDat: Array<dialogDatPropsType>,
    massageData: Array<massageDataPropsType>
    newMassageText: string
    dispatch: (action: DispatchActionType)=>void
}

export const Dialogs = (props: MassageDialogPropsType) => {

    const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const addMassage = () => {
        if (newMassageElement.current) {
            props.dispatch(addMassageAC())
        }
    }

    const onMessageChange = () => {
        if (newMassageElement.current) {
            let text = newMassageElement.current.value
            props.dispatch(updateNewMassageTextAC(text))
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
                    <button onClick={addMassage}>Add massage</button>
                </div>
            </div>
        </div>

    )

}