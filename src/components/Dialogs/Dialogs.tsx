import React from "react";
import {NavLink, Redirect} from "react-router-dom";
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
    addMassage: () => void
    messageChange: (text: string) => void
    isAuth: boolean
}

export const Dialogs = (props: MassageDialogPropsType) => {
    // let dispatch=useDispatch();
    const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const onAddMassage = () => {
        if (newMassageElement.current) {
            props.addMassage()
        }
    }

    const onMessageChange = () => {
        if (newMassageElement.current) {
            let text = newMassageElement.current.value
            props.messageChange(text)
        }
    }

    if (!props.isAuth) return <Redirect to={'/Login'} />

        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    <DialogItem dialogDat={props.dialogDat}/>
                </div>
                <div className={classes.massages}>
                    <Massage massageData={props.massageData}/>
                    <div>
                        <textarea onChange={onMessageChange} ref={newMassageElement}
                                  value={props.newMassageText}></textarea>
                        <button onClick={onAddMassage}>Add massage</button>
                    </div>
                </div>
            </div>

        )

}