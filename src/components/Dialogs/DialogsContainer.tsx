import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMassageAC, DialogStateType, updateNewMassageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ReducerType} from "../../redux/redux-store";

type MassageDialogPropsType = {
    // dialogDat: Array<dialogDatPropsType>,
    // massageData: Array<massageDataPropsType>
    // newMassageText: string
    // dispatch: (action: DispatchActionType)=>void
}

export const DialogsContainer = (props: MassageDialogPropsType) => {
    let dialogPage =  useSelector<ReducerType, DialogStateType>(state => state.dialogPage)
    let dispatch=useDispatch();
    const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const addMassage = () => {
        // if (newMassageElement.current) {
            // props.dispatch(addMassageAC())
            dispatch(addMassageAC())
        // }
    }

    const messageChange = (text: string) => {
        // if (newMassageElement.current) {
        //     let text = newMassageElement.current.value
            // props.dispatch(updateNewMassageTextAC(text))
            dispatch(updateNewMassageTextAC(text))
        //}
    }

    return (<Dialogs addMassage={addMassage}
                     messageChange={messageChange}
                     dialogDat={dialogPage.dialogDat}
                     massageData={dialogPage.massageData}
                     newMassageText={dialogPage.newMassageText}/>)

}