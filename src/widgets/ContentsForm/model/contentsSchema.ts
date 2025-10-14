import {z} from "zod"

export const contentsSchema = z.object({
    material: z.string().min(2, {message: "Укажите валидный материал"}).max(35, {message : "Укажите валидный материал"}),
    quantity: z.number("Введите число"),
    unit: z.enum(["m2", "pcs", "kg", "m3", "l", "custom"])
})

export type FormContentsTypes = z.infer<typeof contentsSchema> 