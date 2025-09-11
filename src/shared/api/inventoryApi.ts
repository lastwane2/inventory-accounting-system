import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWarehouse } from "../model/warehouseSchema";
import { auth } from "../lib/firebase";

export const warehouseApi = createApi({
    reducerPath: "warehouseApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3001/api",
        prepareHeaders: async (headers) => {
            const token = auth.currentUser?.getIdToken?.()
            if (token) headers.set("authorization", `Bearer ${token}`)
        }
    }),
    endpoints: (builder) => ({
        
        getWarehouses : builder.query<IWarehouse[], void>({
            query: () => ({
                url: "/warehouses",
                method: "GET"
            })
        }),

        getWarehouseById : builder.query<IWarehouse, string>({
            query: (id) => `/warehouses/${id}`
        })
        
    })
})

export const { useGetWarehousesQuery, useGetWarehouseByIdQuery } = warehouseApi;