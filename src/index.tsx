import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, statePropsType, subscribe, updateNewPostText} from "./redux/state";


let rerenderEntireTree = (state: statePropsType) => {
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
    )
}
rerenderEntireTree(state);
subscribe(()=>rerenderEntireTree(state));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
