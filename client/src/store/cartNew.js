import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartUpdate = createSlice({
  name: 'cartUpdate',
  initialState,
  reducers: {
    itemAdded(state, action) {
      state.push(action.payload)
    },
    remFromCart(state, action) {
      let idx = state.findIndex((p) => p._id === action.payload)
      state.splice(idx, 1)
    },
    addToCart(state, action) {
      let idx = state.find((p) => p._id === action.payload)
      state.push(idx)
    },
    cleanCart(state, action) {
      state.reset(state)
    },
  },
})

export const { itemAdded, remFromCart, addToCart, cleanCart } =
  cartUpdate.actions
export default cartUpdate.reducer
