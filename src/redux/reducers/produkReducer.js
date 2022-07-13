import {
  GET_ALL_PRODUCT,
  PRODUCT_ERROR,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  TEMP_PRODUCT,
  EDIT_PRODUCT,
  NEW_PRODUCT,
  TERIMA_PENAWARAN,
  DETAIL_PRODUCT,
  EMPTY_DETAIL,
} from '../actions/types'
const initialState = {
  product: [],
  detailProduct: '',
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
        detailProduct: '',
        status: 'GET_ALL',
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
    case DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: action.payload,
      }
    case EMPTY_DETAIL:
      return {
        ...state,
        detailProduct: '',
      }
    default:
      return state
  }
}

export default productReducer
