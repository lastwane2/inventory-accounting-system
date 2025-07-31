import Button from '@mui/material/Button';
import {FC, ReactElement} from "react";
import { Link } from 'react-router';

const Sidebar: FC = () : ReactElement => {
    return (
        <div className="w-1/5 bg-[#212529] h-screen">
            
            <Link to="/warehouse">
                <Button
                    variant='text'
                    color='secondary'
                    fullWidth
                >
                    Склады
                </Button>
            </Link>

            <Button
                variant='text'
                color='secondary'
                fullWidth
            >
                Профиль
            </Button>

            <Button
                variant='text'
                color='secondary'
                fullWidth
            >
                Выйти
            </Button>
        </div>
    )
} 

export { Sidebar }