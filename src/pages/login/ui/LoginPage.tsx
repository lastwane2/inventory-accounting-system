import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import { FC, ReactElement } from "react"

export const LoginPage : FC = () : ReactElement => {
    return(
        <form>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Button type="submit"/>
        </form>
    )
}
