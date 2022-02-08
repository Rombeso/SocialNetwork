import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMassageAC, DialogStateType, updateNewMassageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ReducerType} from "../../redux/redux-store";
import {AuthDataType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

type MassageDialogPropsType = {
}

export const DialogsContainer = (props: MassageDialogPropsType) => {
    let dialogPage =  useSelector<ReducerType, DialogStateType>(state => state.dialogPage)
    let isAuth = useSelector<ReducerType, AuthDataType>(state => state.auth)
    let dispatch=useDispatch();

    const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const addMassage = () => {
            dispatch(addMassageAC())
    }

    const messageChange = (text: string) => {
            dispatch(updateNewMassageTextAC(text))
    }

    const AuthRedirectComponent = () => {
        if (!isAuth.isAuth) return <Redirect to={'/login'}/>
        return(<Dialogs addMassage={addMassage}
                        messageChange={messageChange}
                        dialogDat={dialogPage.dialogDat}
                        massageData={dialogPage.massageData}
                        newMassageText={dialogPage.newMassageText}
                        isAuth={isAuth.isAuth}
        />)
    }

    return <AuthRedirectComponent />

}