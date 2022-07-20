import {
    CREATE_TRANSACTION,
} from "../actions/types";
const initialState = {
    transaction: '',
};

const bidReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      };
    
    default:
      return state;
  }
};

export default bidReducer;