import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {statePropsType} from "./redux/state";


let rerenderEntireTree = (state: statePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={store.getState()}
                addPost={store.addPost}
                updateNewPostText={store.updateNewPostText}
                newText={store._state.profilePage.newPostText}
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState());
store.subscribe(()=>rerenderEntireTree(store.getState()));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
