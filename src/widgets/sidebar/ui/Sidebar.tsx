import Button from '@mui/material/Button';
import {FC, ReactElement} from "react";

const Sidebar: FC = () : ReactElement => {
    return (
        <div className="w-1/5 bg-[#344e41] h-screen">
            <Button
                variant='text'
                fullWidth
            >
                Склады
            </Button>

            <Button
                variant='text'
                fullWidth
            >
                Профиль
            </Button>

            <Button
                variant='text'
                fullWidth
            >
                Выйти
            </Button>
        </div>
    )
} 

export { Sidebar }