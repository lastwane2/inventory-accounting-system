import { Warehouse } from "@/widgets/Warehouse";
import { FC, ReactElement } from "react";

const Inventory: FC = () : ReactElement => {
    return(
        <div className="w-full box-border p-8">
            <Warehouse/>
        </div>
    )
}

export { Inventory }