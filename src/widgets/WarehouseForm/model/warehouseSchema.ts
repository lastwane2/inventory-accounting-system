import {z} from "zod"

export const WarehouseSchema = z.object({
    name: z.string().min(3, {message: "Название должно быть более 3 символов"}).max(25, {message: "Название должно быть менее 25 символов"}),
    location: z.string().min(3, {message: "Адрес быть более 3 символов"}).max(35, {message: "Адрес должен быть менее 35 символов"}),
})

export type FormWarehouseTypes = z.infer<typeof WarehouseSchema>