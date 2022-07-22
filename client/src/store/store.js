import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { shopApi } from './shopData/shopData'
import cartUpdate from './cartNew'

export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    cartUpdate: cartUpdate,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)
