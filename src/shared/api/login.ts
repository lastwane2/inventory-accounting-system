import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/shared/lib/firebase"
import type { User } from "firebase/auth"


export const authMethods = {
    signup: async (email: string, password: string): Promise<User | null> => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          return userCredential.user
        } catch (error: any) {
          console.log(error.code, error.message)
          return null
        }
    },

    signin: async (email: string, password: string): Promise<User | null> => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password)
          return userCredential.user
        } catch (error: any) {
          console.log(error.code, error.message)
          return null
        }
    },

    signout: async () => {
      try {
        signOut(auth)
        console.log("you signed out")
        return null
      } catch (error: any) {
        console.log(error)
        return null
      }
    }
  }