import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../RestaurantesAPI/RestaurantesAPI'

type CartState = {
  items: CardapioItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CardapioItem>) => {
      state.items.push(action.payload)
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
