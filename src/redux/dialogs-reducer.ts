import {
    dialogDatPropsType,
    DispatchActionType,
    massageDataPropsType
} from "./store";

const ADD_MASSAGE = 'ADD_MASSAGE'

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
    ]
}

const dialogsReducer = (state: DialogStateType = initialState, action: DispatchActionType) => {
    switch (action.type) {
        case ADD_MASSAGE:
            let newMassage: massageDataPropsType = {
                massage: action.newMassageText,
                id: "4"
            }
            state.massageData.push(newMassage);
            return {
                ...state, massageData: [...state.massageData]
                // ...state, newMassageText: '', massageData: [...state.massageData, newMassage]
            };
        default:
            return state
    }


}

export const addMassageAC = (newMassageText: string) => {
    return {
        type: ADD_MASSAGE,
        newMassageText: newMassageText
    } as const
}

export type DialogStateType = {
    dialogDat: Array<dialogDatPropsType>
    massageData: Array<massageDataPropsType>
}
export type AddMassageActionType = ReturnType<typeof addMassageAC>

export default dialogsReducer