import { combineReducers } from '@reduxjs/toolkit'
import restaurantesReducer from './restaurantesReducers'
import cartReducer from './cartReducers'

const rootReducer = combineReducers({
  restaurantes: restaurantesReducer,
  cart: cartReducer
})

export default rootReducer
