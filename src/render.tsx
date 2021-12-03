import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {addPost, statePropsType} from "./redux/state";


export let rerenderEntireTree = (state: statePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

