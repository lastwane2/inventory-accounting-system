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
        }),

        createWarehouse : builder.mutation<IWarehouse, IWarehouse>({
            query: (warehouse) => ({
                url: "/warehouses",
                method: "POST",
                body: warehouse
            }),
            invalidatesTags: ["Warehouses"]
        }),

        updateWarehouse : builder.mutation<IWarehouse, {id : string, warehouse: IWarehouse}>({
            query: ({id, warehouse}) => ({
                url: `/warehouses/${id}`,
                method: "PUT",
                body: warehouse
            }),
            invalidatesTags: ["Warehouses"]
        })
    })
})

export const { 
    useGetWarehousesQuery, 
    useGetWarehouseByIdQuery, 
    useDeleteWarehouseByIdMutation,
    useCreateWarehouseMutation,
    useUpdateWarehouseMutation
} = warehouseApi;