import React from 'react';
import './App.css';
import {NavBar} from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/header/header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {addMassageAC, statePropsType, StoreType} from './redux/store';
import {ReducerType} from "./redux/redux-store";
import {useDispatch, useSelector} from "react-redux";
import {ProfileStateType} from "./redux/profile-reducer";
import {DialogStateType} from "./redux/dialogs-reducer";


type AppPropsType = {
    // appState: statePropsType
    // addPost: ()=>void
    // updateNewPostText: (newText: string)=> void
    // newPostText:string
    // newMassageText:string
    // store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {
    let profilePage =  useSelector<ReducerType, ProfileStateType>(state => state.profilePage)
    let dialogPage =  useSelector<ReducerType, DialogStateType>(state => state.dialogPage)
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path='/dialogs' render={() => <Dialogs
                        // dialogDat={props.appState.dialogPage.dialogDat}
                        // massageData={props.appState.dialogPage.massageData}
                        // newMassageText={props.newMassageText}
                        dialogDat={dialogPage.dialogDat}
                        massageData={dialogPage.massageData}
                        newMassageText={dialogPage.newMassageText}
                        // dispatch={props.store.dispatch.bind(props.store)}
                        // dispatch={dispatch(addMassageAC()}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        massageMyPost={profilePage.massageMyPost}
                        // addPost={props.addPost.bind(props.store)}
                        // updateNewPostText={props.updateNewPostText.bind(props.store)}
                        // newPostText={props.newPostText}
                        newPostText={profilePage.newPostText}
                        // dispatch={props.store.dispatch.bind(props.store)}
                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
