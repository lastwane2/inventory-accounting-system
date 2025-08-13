import authReducer from '@/entities/user/model/userSlice'
import { warehouseApi } from '@/shared/api/inventoryApi'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        user: authReducer,
        [warehouseApi.reducerPath]: warehouseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(warehouseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch