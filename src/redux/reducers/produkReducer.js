import {
  GET_ALL_PRODUCT,
  PRODUCT_ERROR,
  DELETE_PRODUCT,
} from "../actions/types";
const initialState = {
  product: [],
  detailProduct: [],
  editProduct: [],
  previewProduct: [],
  status: [],
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
        status: action.status,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        status: action.payload,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "FAIL",
      };
    default:
      return state;
  }
};

export default productReducer;
