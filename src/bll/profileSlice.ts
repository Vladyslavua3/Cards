import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface profileType {
    user:[]
}

const initialState:profileType[] = []


const slice = createSlice({
    name:'profile',
    initialState,
    reducers:{
        addUser:(state, action:PayloadAction<{userId:string}>) => {
            return state
        }
    }
})


export const profileReducer = slice.reducer
export const profileActions = slice.actions
export const profileThunk = {}
