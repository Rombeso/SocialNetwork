import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css'
import {Massage} from "./Massage/Massage";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogDatPropsType, massageDataPropsType} from "../../redux/state";

type MassageDialogPropsType = {
    dialogDat: Array<dialogDatPropsType>,
    massageData: Array<massageDataPropsType>
}

export const Dialogs = (props: MassageDialogPropsType) => {

    const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const addMassage = () => {
        let text = alert(newMassageElement.current?.value)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*{dialogElement}*/}
                <DialogItem dialogDat={props.dialogDat} />

            </div>
            <div className={classes.massages}>
                {/*{massageElement}*/}
                <Massage massageData={props.massageData} />
                <div>
                    <textarea ref={newMassageElement}></textarea>
                    <button onClick={addMassage}>Add massage</button>
                </div>
            </div>
        </div>

    )

}