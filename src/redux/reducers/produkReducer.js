import { PRODUCT_ERROR, DELETE_PRODUCT, ADD_PRODUCT } from '../actions/types'
const initialState = {
  product: [],
  detailProduct: [],
  editProduct: [],
  previewProduct: [],
  status: null,
  error: null,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        status: 'success add product',
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        status: action.payload,
      }

    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: 'FAIL',
      }
    default:
      return state
  }
}

export default productReducer
