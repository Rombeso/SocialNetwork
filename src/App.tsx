import React from 'react';
import './App.css';
import {NavBar} from './components/Navbar/Navbar';
import {Profile} from "./components/Profile/Profile";
import {Header} from "./components/header/header";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


type AppPropsType = {
    // appState: statePropsType
    // addPost: ()=>void
    // updateNewPostText: (newText: string)=> void
    // newPostText:string
    // newMassageText:string
    // store: StoreType
}


const App: React.FC<AppPropsType> = (props) => {
    // let profilePage =  useSelector<ReducerType, ProfileStateType>(state => state.profilePage)
    // let dialogPage =  useSelector<ReducerType, DialogStateType>(state => state.dialogPage)
    // const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
