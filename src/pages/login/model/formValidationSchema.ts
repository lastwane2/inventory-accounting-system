 import { z } from "zod";

export const UserRegSchema = z.object({
        email: z.string().email({message: "Неправильная почта" }),
        password: z.string().min(8, {message: "Пароль должен быть больше 8 символов" }).max(20, {message: "Пароль должен быть меньше 20 символов" }),
        confirmPassword: z.string().min(8, {message: "Пароль должен быть больше 8 символов" }).max(20, {message: "Пароль должен быть меньше 20 символов" })
    })
    .refine((data) => data.password === data.confirmPassword, ({
        message: "Пароли не совпадают",
        path: ["confirmPassword"]
    }))

export type FormRegTypes = z.infer<typeof UserRegSchema>

export const UserLogSchema = z.object({
        email: z.string().email({message: "Неправильная почта" }),
        password: z.string().min(8, {message: "Пароль должен быть больше 8 символов" }).max(20, {message: "Пароль должен быть меньше 20 символов" }),
    })

export type FormLogTypes = z.infer<typeof UserLogSchema>