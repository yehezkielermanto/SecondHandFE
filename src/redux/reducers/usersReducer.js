/* eslint-disable no-unused-vars */
import { GET_USER, USERS_ERROR } from "../actions/types";

// const initialState = {
//   isAuthenticated: !!localStorage.getItem("token"),
//   token: localStorage.getItem("token"),
//   user: {},
//   errorU: null,
// };

const initialState = {
  user: {},
  errorU: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case USERS_ERROR:
      return {
        ...state,
        errorU: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
