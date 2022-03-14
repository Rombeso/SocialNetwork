import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {StoreType} from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import SamuraiJSApp from "./App";


// let rerenderEntireTree = (state: StoreType) => {


    ReactDOM.render(
        <React.StrictMode>
            <SamuraiJSApp />
           {/* <BrowserRouter>*/}
           {/*<Provider store={store}>*/}
           {/* <App/>*/}
           {/*</Provider>*/}
           {/*     </BrowserRouter>*/}
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
