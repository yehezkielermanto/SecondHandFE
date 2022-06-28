import { combineReducers } from 'redux'

import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import citiesReducer from "./citiesReducer";
import categoryReducer from './categoryReducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  cities: citiesReducer,
  category: categoryReducer,
});
