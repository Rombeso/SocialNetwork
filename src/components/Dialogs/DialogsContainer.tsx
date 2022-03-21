import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addMassageAC, DialogStateType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {ReducerRootType} from "../../redux/redux-store";
import {AuthDataType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

type MassageDialogPropsType = {
}

const DialogsContainer = (props: MassageDialogPropsType) => {
    let dialogPage =  useSelector<ReducerRootType, DialogStateType>(state => state.dialogPage)
    let isAuth = useSelector<ReducerRootType, AuthDataType>(state => state.auth)
    let dispatch=useDispatch();

    // const newMassageElement = React.createRef<HTMLTextAreaElement>();

    const addMassage = (newMassageText: string) => {
            dispatch(addMassageAC(newMassageText))
        // Диспачить имя и ID, склеивать и выводить их.
    }

    // const messageChange = (text: string) => {
    //         dispatch(updateNewMassageTextAC(text))
    // }

    const AuthRedirectComponent = () => {
        if (!isAuth.isAuth) return <Redirect to={'/login'}/>
        return(<Dialogs addMassage={addMassage}
                        // messageChange={messageChange}
                        dialogDat={dialogPage.dialogDat}
                        massageData={dialogPage.massageData}
                        // newMassageText={dialogPage.newMassageText}
                        isAuth={isAuth.isAuth}
        />)
    }

    return <AuthRedirectComponent />

}

export default DialogsContainer