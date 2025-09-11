import { InventoryItem } from "@/widgets/InventoryItem";
import { FC, ReactElement } from "react";

import { useGetWarehousesQuery } from "@/shared/api/inventoryApi";
import { Link } from "react-router";

const Inventory: FC = () : ReactElement => {
    const { data, isLoading, isError } = useGetWarehousesQuery();

    return(
        <div className="w-full box-border p-8">
          {isError ? (
            <>error</>
          ): isLoading ? (
            <>Loading...</>
          ) : data ? (
            <div className="flex flex-col gap-3">
                {data.map((warehouse) => (
                  <Link to={`/user/warehouse/${warehouse.id}`} key={warehouse.id}>
                    <InventoryItem key={warehouse.id} text={warehouse.name} />
                  </Link>
                ))}
            </div>
          ) : null}  
        </div>
    )
}

export { Inventory }