import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/shared/lib/firebase"

export const authMethods = {
    signup: (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    },
}