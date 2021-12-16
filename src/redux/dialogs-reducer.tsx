import {
    addMassageAC,
    dialogDatPropsType,
    DispatchActionType,
    massageDataPropsType,
    massageMyPostPropsType, updateNewMassageTextAC
} from "./state";


type StateType = {
    dialogDat: Array<dialogDatPropsType>
    massageData: Array<massageDataPropsType>
    newMassageText: string
}
const ADD_MASSAGE = 'ADD_MASSAGE'
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE_NEW_MASSAGE_TEXT'

const dialogsReducer = (state: StateType, action: DispatchActionType) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage: massageDataPropsType = {
                massage: state.newMassageText,
                id: "4"
            }
            state.massageData.push(newMassage);
            state.newMassageText = ''
            return state;
        case UPDATE_NEW_MASSAGE_TEXT:
            state.newMassageText = action.newMassage;
            return state;
        default:
            return state
    }


}
export type AddMassageActionType = ReturnType<typeof addMassageAC>
export type UpdateNewMassageText = ReturnType<typeof updateNewMassageTextAC>

export default dialogsReducer