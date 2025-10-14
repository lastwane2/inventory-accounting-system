import { SubmitHandler, useForm } from "react-hook-form"
import { contentsSchema, FormContentsTypes } from "../model/contentsSchema"
import { useState } from "react"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Input from "@mui/material/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateWarehouseMutation } from "@/shared/api/inventoryApi"
import { IWarehouse } from "@/shared/model/warehouseSchema"

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
};

type ContentsFormProps = {
    warehouseData: IWarehouse;
    id?: string;
  };

export const ContentsForm = ({ warehouseData, id }: ContentsFormProps) => {
    const { register, handleSubmit, formState : { errors } } = useForm<FormContentsTypes> ({
        resolver : zodResolver(contentsSchema)
    })
    const [updateWarehouse, {isLoading, isError, isSuccess}] = useUpdateWarehouseMutation()
    const [contents, setContents] = useState(warehouseData.contents ?? []);

    const onSubmit: SubmitHandler<FormContentsTypes> = async (data) => {
        try {
            const nextContents = [...contents, data];

            const nextWarehouse: IWarehouse = {
              ...warehouseData,
              contents : nextContents,
            };
        
            await updateWarehouse({ id: id!, warehouse: nextWarehouse });
            setContents(nextContents)

          } catch (e) {
            console.error(e);
          }
    }

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)

    return(
        <div>
            <Button type="button" onClick={handleOpen}>Добавить элемент</Button>

            <Modal
                open = {isOpen}
                onClose={handleClose}
            >
                <Box sx = {style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                            Заполните информацию о элементе
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            {...register("material", {required : true})}
                            placeholder="Введите название материала"
                        />
                        {errors.material && <span className="text-red-700">{errors.material.message}</span>}
                        <Input
                            type="number"
                            {...register("quantity", {required : true, valueAsNumber: true})}
                            placeholder="Введите количество у.е"
                        />
                        {errors.quantity && <span className="text-red-700">{errors.quantity.message}</span>}
                        <Input
                            {...register("unit", {required : true})}
                            placeholder="Введите название материала"
                        />
                        {errors.unit && <span className="text-red-700">{errors.unit.message}</span>}
                        {
                            isLoading ? (
                                <span>Загрузка</span>
                            ): isError ? (
                                <span className="text-red-700">Ошибка</span>
                            ): isSuccess ? (
                                <span className="text-green-700">Успех</span>
                            ): null
                        }

                        <Button type="submit">Подтвердить</Button>
                    </form>
                </Box>
                
            </Modal>

        </div>
    )
}