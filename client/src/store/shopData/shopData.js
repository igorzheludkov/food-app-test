import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shopApi = createApi({
  reducerPath: 'shops/data',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://food-app-test-server.herokuapp.com/api',
  }),
  endpoints: (builder) => ({
    shopItems: builder.query({
      query: () => '/shops',
    }),
    ordersHistory: builder.query({
      query: (search) => ({
        url: '/orders',
        params: {
          q: search,
        },
      }),
    }),
    submitOrder: builder.mutation({
      query: (payload) => ({
        url: '/orders',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
})

export const {
  useShopItemsQuery,
  useSubmitOrderMutation,
  useOrdersHistoryQuery,
} = shopApi
