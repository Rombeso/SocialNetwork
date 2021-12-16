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

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type AddMassageActionType = ReturnType<typeof addMassageAC>
type UpdateNewMassageText = ReturnType<typeof updateNewMassageTextAC>

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
        if (action.type === 'ADD_POST') {
            let newPost: massageMyPostPropsType = {
                id: '5',
                massage: this._state.profilePage.newPostText,
                likesCounter: '0'
            }
            this._state.profilePage.massageMyPost.push(newPost);
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'ADD_MASSAGE') {
            let newMassage: massageDataPropsType = {
                massage: this._state.dialogPage.newMassageText,
                id: "4"
            }
            this._state.dialogPage.massageData.push(newMassage);
            this._state.dialogPage.newMassageText = ''
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE_NEW_MASSAGE_TEXT') {
            this._state.dialogPage.newMassageText = action.newMassage;
            this._rerenderEntireTree(this._state);
        }
    }
}

    export default store
