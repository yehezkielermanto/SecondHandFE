import {
  GET_ALL_PRODUCT,
  PRODUCT_ERROR,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  TEMP_PRODUCT,
  EDIT_PRODUCT,
  NEW_PRODUCT,
  TERIMA_PENAWARAN,
} from '../actions/types'
const initialState = {
  product: [],
  detailProduct: [],
  editProduct: [],
  previewProduct: [],
  status: null,
  error: null,
  terima: false,
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
        status: action.status,
      }
    case ADD_PRODUCT:
      return {
        ...state,
        status: 'success add product',
        product: [],
        previewProduct: [],
      }
    case NEW_PRODUCT:
      return {
        ...state,
        status: '',
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
    case TEMP_PRODUCT:
      return {
        ...state,
        previewProduct: action.payload,
        status: 'edited',
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        previewProduct: action.payload,
        status: 'notPreview',
      }
    case TERIMA_PENAWARAN:
      return {
        ...state,
        terima: true,
      }
    default:
      return state
  }
}

export default productReducer