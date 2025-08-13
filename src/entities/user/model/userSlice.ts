import { RootState } from "@/app/model/store";
import { createSlice } from "@reduxjs/toolkit";

interface IUser {
    user: string | null,
    isAuth: boolean,
    isAuthReady: boolean
}

const initialState: IUser = {
    user: null,
    isAuth: false,
    isAuthReady: false
}

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuth = !!action.payload
            state.isAuthReady = true
        },
        
        setAuthReady: (state) => {
            state.isAuthReady = true
        }
    }
})

export const { setUser, setAuthReady } = userSlice.actions
export const isAuthSelector = (state: RootState) => state.user.isAuth
export const isAuthReadySelector = (state: RootState) => state.user.isAuthReady
export default userSlice.reducer