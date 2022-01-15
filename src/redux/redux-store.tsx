import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./store";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
});

export type ReducerType = ReturnType<typeof reducers>

let store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store