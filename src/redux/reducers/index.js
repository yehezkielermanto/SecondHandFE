import { combineReducers } from "redux";

import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import citiesReducer from "./citiesReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  cities: citiesReducer,
});
