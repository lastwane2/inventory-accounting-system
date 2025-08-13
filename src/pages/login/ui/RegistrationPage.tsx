import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import { FC, ReactElement, useState } from "react"
import { authMethods } from "../api/login"
import { useDispatch } from "react-redux";
import { setUser } from "@/entities/user/model/userSlice";
import { useNavigate } from "react-router";


export const RegistrationPage : FC = () : ReactElement => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = await authMethods.signup(email!, password!)
            if (user) {
              dispatch(setUser(user.uid))
              console.log(user.uid)
              navigate("/user")      
            } else {
              console.warn('Пользователь не вернулся из signup')
            }
        } catch (err) {
            console.error('Ошибка при регистрации:', err)
        }
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
