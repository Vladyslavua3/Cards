import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface loginType {
  data: []
}

const initialState: loginType[] = []

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ userId: string }>) => {
      return state
    },
  },
})

export const loginReducer = slice.reducer
export const loginActions = slice.actions
export const loginThunk = {}
