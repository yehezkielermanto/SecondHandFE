/* eslint-disable no-unused-vars */
import { GET_USER, JUST_UPDATED, USERS_ERROR } from "../actions/types";

// const initialState = {
//   isAuthenticated: !!localStorage.getItem("token"),
//   token: localStorage.getItem("token"),
//   user: {},
//   errorU: null,
// };

const initialState = {
  user: {},
  justUpdated: false,
  errorU: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        justUpdated: false,
      };
    case JUST_UPDATED:
      return {
        ...state,
        user: action.payload,
        justUpdated: true,
      };
    case USERS_ERROR:
      return {
        ...state,
        errorU: action.payload,
        justUpdated: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
