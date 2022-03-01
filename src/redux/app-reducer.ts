import {getAuthUsersData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {ReducerRootType} from "./redux-store";

export type InitType = {
    initialized: boolean
}

let initialState: InitType = {
    initialized: false
}

const appReducer = (state: InitType = initialState, action: ActionType): InitType => {

    switch (action.type) {

        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }

        default:
            return state;
    }
}

export type ActionType = InitializedSuccessActionType

export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

type ThunkType = ThunkAction<void, ReducerRootType, unknown, ActionType>;

export const initializeApp = (): ThunkType => (dispatch) => {
   let promise =  dispatch(getAuthUsersData())
    promise
        .then(()=>{
        dispatch(initializedSuccess())
        }
    )
}

export default appReducer