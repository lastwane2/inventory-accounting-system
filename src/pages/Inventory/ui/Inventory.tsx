import { InventoryItem } from "@/widgets/InventoryItem";
import { FC, ReactElement } from "react";

import { useDeleteWarehouseByIdMutation, useGetWarehousesQuery } from "@/shared/api/inventoryApi";
import { Link } from "react-router";
import Button from "@mui/material/Button";
import { IWarehouse } from "@/shared/model/warehouseSchema";
import { WarehouseForm } from "@/widgets/WarehouseForm";

const Inventory: FC = () : ReactElement => {
    const { data, isLoading, isError } = useGetWarehousesQuery();
    const [deleteWarehouse] = useDeleteWarehouseByIdMutation()

    const handleDelete = (id : string) => {
      deleteWarehouse(id)
    }

    return(
        <div className="w-full box-border p-8">
          {isError ? (
            <>error</>
          ): isLoading ? (
            <>Loading...</>
          ) : data ? (
            <div className="flex flex-col gap-3">
              <WarehouseForm/>
              
              {data.map((warehouse : IWarehouse) => (
                <>
                  <Link to={`/user/warehouse/${warehouse.id}`} key={warehouse.id}>
                    <InventoryItem key={warehouse.id} text={warehouse.name} />
                  </Link>
                  <Button onClick={() => handleDelete(warehouse.id)}>Delete</Button>
                </>
              ))}
            </div>
          ) : null}  
        </div>
    )
}

export { Inventory }