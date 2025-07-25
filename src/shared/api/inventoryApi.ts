import { warehouses } from "@/data/warehouses";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const warehouseApi = createApi({
    reducerPath: "warehouseApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getWarehouses : builder.query({
            queryFn: () => ({ data: warehouses})
        })
    })
})

export const { useGetWarehousesQuery } = warehouseApi;