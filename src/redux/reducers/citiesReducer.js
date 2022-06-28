import { GET_CITIES, CITIES_ERROR, } from "../actions/types";

const initialState = {
  city: [],
  errorC: null,
};

// const initialState = {
//   user: {},
//   error: null,
// };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        city: action.payload,
      };
    case CITIES_ERROR:
      return {
        ...state,
        errorC: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
