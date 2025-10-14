import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Box from '@mui/material/Box';
import { useState } from "react"
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import { FormWarehouseTypes, WarehouseSchema } from "../model/warehouseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateWarehouseMutation } from "@/shared/api/inventoryApi";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const WarehouseForm = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const {register, handleSubmit, formState: { errors }} = useForm<FormWarehouseTypes> ({
        resolver: zodResolver(WarehouseSchema)
    })
    const [createWarehouse , { isLoading, isError, isSuccess }] = useCreateWarehouseMutation()

    const onSubmit : SubmitHandler<FormWarehouseTypes> = async (data) => {
        try {
            console.log(data)
            await createWarehouse(data)
        } catch {
            console.log(data)
        }
    }
    
    
    return(
        <div>
            <Button type="button" onClick={handleOpen}>Добавить склад</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Заполните информацию о складе
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input {...register("name", {required: true})} placeholder="Введите название склада"/>
                        {errors.name && <span className="text-red-700">{errors.name.message}</span>}
                        
                        <Input {...register("location", {required: true})} placeholder="Введите адрес склада"/>
                        {errors.location && <span className="text-red-700">{errors.location.message}</span>}
                        
                       
                        <Button type="submit">Подтвердить</Button>
                    </form>
                    {
                        isLoading ? (
                            <span>Загрузка</span>
                        ): isError ? (
                            <span className="text-red-700">Ошибка</span>
                        ): isSuccess ? (
                            <span className="text-green-700">Успех</span>
                        ): null
                    }
                </Box>
            </Modal>
        </div>
    )
}