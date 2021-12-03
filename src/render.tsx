import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, statePropsType, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state: statePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                newText={state.profilePage.newPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

