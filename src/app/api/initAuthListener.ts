import { Store } from "@reduxjs/toolkit";
import { RootState } from "../model/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setAuthReady, setUser } from "@/entities/user/model/userSlice";


export const initAuthListener = (store : Store<RootState>) => {
    const auth = getAuth()

    const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
            store.dispatch(setUser(user.uid))
            store.dispatch(setAuthReady())
        } else {
            store.dispatch(setUser(null))
        }
    })

    return unsub
}