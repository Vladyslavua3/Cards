import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {loginReducer} from "./loginReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
        profile:profileReducer,
        auth:loginReducer
})

export type AppStateType = ReturnType<typeof rootReducer>




export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))