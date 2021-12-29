import {
    addMassageAC,
    dialogDatPropsType,
    DispatchActionType,
    massageDataPropsType,
    massageMyPostPropsType, updateNewMassageTextAC
} from "./store";

export type DialogStateType = {
    dialogDat: Array<dialogDatPropsType>
    massageData: Array<massageDataPropsType>
    newMassageText: string
}
const ADD_MASSAGE = 'ADD_MASSAGE'
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE_NEW_MASSAGE_TEXT'

let initialState = {
    dialogDat: [
        {name: 'Dima', id: '1'},
        {name: 'Roma', id: '2'},
        {name: 'Petya', id: '3'},
        {name: 'Sasha', id: '4'}
    ],
    massageData: [
        {massage: "Hello, how are you?", id: "1"},
        {massage: "I'm fine, and you?", id: '2'},
        {massage: "I'am ok. Today is bad wather.", id: '3'}
    ],
    newMassageText: 'it-incubator'
}


const dialogsReducer = (state: DialogStateType = initialState, action: DispatchActionType) => {
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