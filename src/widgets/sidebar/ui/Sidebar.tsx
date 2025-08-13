import Button from '@mui/material/Button';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="w-1/5 bg-[#212529] h-screen">
            
            <Link to="/user/warehouse">
                <Button
                    variant='text'
                    color='secondary'
                    fullWidth
                >
                    Склады
                </Button>
            </Link>

            <Link to="/user">
                <Button
                    variant='text'
                    color='secondary'
                    fullWidth
                >
                    Профиль
                </Button>
            </Link>

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