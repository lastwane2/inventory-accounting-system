import { authMethods } from '@/shared/api/login';
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
            <Link to="/signup">
                <Button
                    onClick={authMethods.signout}
                    variant='text'
                    color='secondary'
                    fullWidth
                >
                    Выйти
                </Button>
            </Link>
        </div>
    )
} 

export { Sidebar }