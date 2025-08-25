import { isAuthSelector, isAuthReadySelector } from "@/entities/user/model/userSlice"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

export const PrivateRoute = () => {
    const isAuth = useSelector(isAuthSelector)
    const isReady = useSelector(isAuthReadySelector)

    if (!isReady){
        return <div>loading...</div>
    }

    return  isAuth ? <Outlet /> : <Navigate to="/signin" replace/>
}