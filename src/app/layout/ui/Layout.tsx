import { Sidebar } from "@/widgets/sidebar";
import {FC, ReactElement} from "react";
import { Outlet } from "react-router";

const Layout: FC = () : ReactElement => {
    return (
        <div className="bg-[#dad7cd] flex w-full">
            <Sidebar/>
            <Outlet/>
        </div>
    )
} 

export { Layout }