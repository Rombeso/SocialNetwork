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
        id: string
    }

export type profilePagePropsType = {
    massageMyPost: Array<massageMyPostPropsType>
    newPostText: string
}

export type dialogPagePropsType = {
    dialogDat: Array<dialogDatPropsType>
    massageData: Array<massageDataPropsType>
}

export type statePropsType = {
    profilePage: profilePagePropsType
    dialogPage: dialogPagePropsType
}
export type StoreType = {
    _state: statePropsType
    _rerenderEntireTree: (state: any)=>void
    // addPost: ()=>void
    // updateNewPostText: (newText: string)=>void
    subscribe: (observer: () => void)=>void
    getState: ()=>statePropsType
    dispatch: (action: DispatchActionType)=>void
}

export type DispatchActionType = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = {
    type: 'ADD_POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
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
            ]
        }
    },
    _rerenderEntireTree(state: any) {
        console.log('state changed');
    },
    // addPost() {
    //     let newPost: massageMyPostPropsType = {
    //         id: '5',
    //         massage: this._state.profilePage.newPostText,
    //         likesCounter: '0'
    //     }
    //     this._state.profilePage.massageMyPost.push(newPost);
    //     this._state.profilePage.newPostText = ''
    //     this._rerenderEntireTree(this._state);
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._rerenderEntireTree(this._state);
    // },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action){
        if (action.type === 'ADD_POST') {
            let newPost: massageMyPostPropsType = {
                id: '5',
                massage: this._state.profilePage.newPostText,
                likesCounter: '0'
            }
            this._state.profilePage.massageMyPost.push(newPost);
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
    }
}

export default store
