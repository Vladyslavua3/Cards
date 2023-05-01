import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

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

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  Action<string>
>

// @ts-ignore
window.store = store
