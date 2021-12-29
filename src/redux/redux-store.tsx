import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "./store";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
});

export type ReducerType = ReturnType<typeof reducers>

let store = createStore(reducers);

export default store