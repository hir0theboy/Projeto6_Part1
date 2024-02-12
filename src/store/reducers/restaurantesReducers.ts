import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurantes } from '../../RestaurantesAPI/RestaurantesAPI'

type RestaurantesInfos = {
  items: Restaurantes[]
}

const initialState: RestaurantesInfos = {
  items: []
}

const restaurantesSlice = createSlice({
  name: 'restaurantes',
  initialState,
  reducers: {
    setRestaurantes: (state, action: PayloadAction<Restaurantes[]>) => {
      state.items = action.payload
    }
  }
})

export const { setRestaurantes } = restaurantesSlice.actions
export default restaurantesSlice.reducer
