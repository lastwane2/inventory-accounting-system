import { InventoryItem } from "@/widgets/InventoryItem";
import { FC, ReactElement } from "react";

import { useGetWarehousesQuery } from "@/shared/api/inventoryApi";

const Inventory: FC = () : ReactElement => {
    const { data, isLoading, isError } = useGetWarehousesQuery(undefined, { refetchOnMountOrArgChange: true });

    return(
        <div className="w-full box-border p-8">
          {isError ? (
            <>error</>
          ): isLoading ? (
            <>Loading...</>
          ) : data ? (
            <div>
                {data.map((warehouse) => (
                    <InventoryItem key={warehouse.id} text={warehouse.name} />
                ))}
            </div>
          ) : null}  
        </div>
    )
}

export { Inventory }