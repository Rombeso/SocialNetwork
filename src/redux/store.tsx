import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {AddMassageActionType, UpdateNewMassageText} from "./dialogs-reducer";

export type massageMyPostPropsType = {
    id?: string,
    massage: string,
    likesCounter: string
}

export type dialogDatPropsType = {
    name: string,
    id: string
}

export type massageDataPropsType =
    {
        massage: string
        id?: string
    }

export type profilePagePropsType = {
    massageMyPost: Array<massageMyPostPropsType>
    newPostText: string
}

export type dialogPagePropsType = {
    dialogDat: Array<dialogDatPropsType>
    massageData: Array<massageDataPropsType>
    newMassageText: string
}

export type statePropsType = {
    profilePage: profilePagePropsType
    dialogPage: dialogPagePropsType
}
export type StoreType = {
    _state: statePropsType
    _rerenderEntireTree: (state: any) => void
    subscribe: (observer: () => void) => void
    getState: () => statePropsType
    dispatch: (action: DispatchActionType) => void
}
export type DispatchActionType = AddPostActionType |
    UpdateNewPostTextActionType |
    AddMassageActionType |
    UpdateNewMassageText

export const addPostAC = () => {
    return {
        type: "ADD_POST"
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: newText
    } as const
}

export const addMassageAC = () => {
    return {
        type: 'ADD_MASSAGE'
    } as const
}

export const updateNewMassageTextAC = (newMassage: string) => {
    return {
        type: 'UPDATE_NEW_MASSAGE_TEXT',
        newMassage: newMassage
    } as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            massageMyPost: [
                {id: '1', massage: 'Hi, how are you?', likesCounter: '5'},
                {id: '2', massage: "It's my first post", likesCounter: '12'}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogPage: {
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
    },
    _rerenderEntireTree(state: any) {
        console.log('state changed');
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._rerenderEntireTree(this._state);
    }
}

export default store
