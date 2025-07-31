import { warehouses } from "@/data/warehouses";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const warehouseApi = createApi({
    reducerPath: "warehouseApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getWarehouses : builder.query({
            queryFn: () => ({ data: warehouses})
        }),
        getWarehouseById : builder.query({
            queryFn: (id: string) => {
                const warehouse = warehouses.find(warehouse => warehouse.id === id as string);
                if (warehouse) {
                    return { data: warehouse };
                } else {
                    return { error: { status: 404, data: "Warehouse not found" } };
                }
            }
        })
    })
})

export const { useGetWarehousesQuery, useGetWarehouseByIdQuery } = warehouseApi;