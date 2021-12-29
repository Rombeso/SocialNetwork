import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {StoreType} from "./redux/store";


// let rerenderEntireTree = (state: StoreType) => {


    ReactDOM.render(
        <React.StrictMode>
           <Provider store={store}>
            <App
                // appState={store.getState()}
                // addPost={store.addPost}
                // updateNewPostText={store.updateNewPostText}
                // newPostText={store._state.profilePage.newPostText}
                // newMassageText={store._state.dialogPage.newMassageText}
                // store={store}
            />
           </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
// }
// rerenderEntireTree(store.getState());
// store.subscribe(()=>rerenderEntireTree(store.getState()));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
