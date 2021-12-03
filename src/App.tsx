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
import {
    addPost,
    dialogDatPropsType,
    massageDataPropsType,
    massageMyPostPropsType,
    statePropsType,
    updateNewPostText
} from './redux/state';


type AppPropsType = {
    appState: statePropsType
    addPost: ()=>void
    updateNewPostText: (newText: string)=> void
    newText:string
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogDat={props.appState.dialogPage.dialogDat}
                        massageData={props.appState.dialogPage.massageData}/>}/>
                    <Route path='/profile' render={() => <Profile
                        massageMyPost={props.appState.profilePage.massageMyPost}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        newText={props.newText}
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
