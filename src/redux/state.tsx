import {rerenderEntireTree} from "../render";

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

let state: statePropsType = {
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
}

export const addPost =  () => {
    let newPost: massageMyPostPropsType = {
        id: '5',
        massage: state.profilePage.newPostText,
        likesCounter: '0'
    }
    state.profilePage.massageMyPost.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText =  (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state