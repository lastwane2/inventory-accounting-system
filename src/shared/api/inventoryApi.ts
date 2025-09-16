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
    tagTypes: ["Warehouses"],
    endpoints: (builder) => ({
        
        getWarehouses : builder.query<IWarehouse[], void>({
            query: () => ({
                url: "/warehouses",
                method: "GET"
            }),
            providesTags: ["Warehouses"]
        }),

        getWarehouseById : builder.query<IWarehouse, string>({
            query: (id) => `/warehouses/${id}`
        }),

        deleteWarehouseById : builder.mutation<void, string> ({
            query: (id) => ({
                url: `/warehouses/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Warehouses"]
        })
        
    })
})

export const { useGetWarehousesQuery, useGetWarehouseByIdQuery, useDeleteWarehouseByIdMutation} = warehouseApi;