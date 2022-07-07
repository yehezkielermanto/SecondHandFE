import { combineReducers } from 'redux'

import authReducer from './authReducer'
import usersReducer from './usersReducer'
import citiesReducer from './citiesReducer'
import categoryReducer from './categoryReducer'
import productReducer from './produkReducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  cities: citiesReducer,
  product: productReducer,
  category: categoryReducer,
})
