import React from 'react';
import './App.css';
import {NavBar} from './components/Navbar/Navbar';
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import s from './App.module.css'
import UsersContainer from "./components/Users/UsersContainer";

import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp, InitType} from "./redux/app-reducer";
import store, {ReducerRootType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type AppPropsType = {
    initializeApp: ()=>any
    initialized: InitType
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
                <div className='app-wrapper'>
                    <p className={s.test}>
                    {/*<p className="text-3xl font-bold underline text-red-600">*/}
                        Hello world!
                    </p>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => {
                                   return  <React.Suspense fallback={<Preloader />}>
                                   <DialogsContainer/>
                                   </React.Suspense>
                               }}/>
                        <Route path='/profile/:userId?'
                               render={() => {
                                   return  <React.Suspense fallback={<Preloader />}>
                                   <ProfileContainer/>
                                   </React.Suspense>
                               }}/>
                        <Route path='/music'
                               render={() => <Music/>}/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state: ReducerRootType):InitType => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = () => {
 return (
     <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
)
}

export default SamuraiJSApp