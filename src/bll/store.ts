import { configureStore } from '@reduxjs/toolkit'
import { AnyAction, combineReducers } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { loginReducer } from 'bll/loginSlice'
import { profileReducer } from 'bll/profileSlice'

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: loginReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store
