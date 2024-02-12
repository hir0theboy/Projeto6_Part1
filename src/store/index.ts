import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cartReducers'
import restaurantesReducer from './reducers/restaurantesReducers'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurantes: restaurantesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
