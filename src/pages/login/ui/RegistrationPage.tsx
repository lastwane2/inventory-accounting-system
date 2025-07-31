import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import { FC, ReactElement, useState } from "react"
import { authMethods } from "../api/login"



export const RegistrationPage : FC = () : ReactElement => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(123)
        return authMethods.signup(email, password)
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input 
                placeholder="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Input 
                placeholder="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            {/* <Input placeholder="password"/> */}
            <Button type="submit"/>
        </form>
    )
}
