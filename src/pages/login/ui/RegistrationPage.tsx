import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import { authMethods } from "@/shared/api/login"
import { useDispatch } from "react-redux";
import { setUser } from "@/entities/user/model/userSlice";
import { Link, useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormRegTypes, UserRegSchema } from "../model/formValidationSchema";
import { useState } from "react";


export const RegistrationPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<FormRegTypes>({
        resolver: zodResolver(UserRegSchema)
    })
    const [backError, setBackError] = useState<string>("")

    const onSubmit: SubmitHandler<FormRegTypes> = async (data) => {
        console.log(data)
        try {
            const user = await authMethods.signup(data.email!, data.password!)
            if (user) {
              dispatch(setUser(user.uid))
              console.log(user.uid)
              navigate("/user")      
            } else {
              setBackError('Пользователь не вернулся из signup')
            }
        } catch {
            setBackError("Что-то не так")
        }
    }

    return(
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-1/3 gap-4 border-2 rounded-xl px-3 py-6"
            >
                <Input {...register("email", { required: true })} placeholder="E-mail"/>
                {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                
                <Input {...register("password", { required: true })} placeholder="Password"/>
                {errors.password && <span className="text-red-700">{errors.password.message}</span>}

                <Input {...register("confirmPassword", { required: true })} placeholder="Password again"/>
                {errors.confirmPassword && <span className="text-red-700">{errors.confirmPassword.message}</span>}

                <Button type="submit" color="primary">submit</Button>
                <Link to="/signin">Войти</Link>
                {backError && <span className="text-red-700">{backError}</span>}
            </form>
        </div>
    )
}
