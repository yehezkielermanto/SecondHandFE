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
  SELLER,
  TEMP_PRODUCT_EDIT,
  UPDATE_PRODUCT,
} from '../actions/types'
const initialState = {
  product: '',
  detailProduct: '',
  editProduct: [],
  previewProduct: [],
  seller: '',
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
        seller: '',
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
        product: [],
        detailProduct: [],
        previewProduct: [],
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
    case TEMP_PRODUCT_EDIT:
      return {
        ...state,
        previewProduct: action.payload,
        status: 'viewEdit',
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        previewProduct: action.payload,
        status: 'notPreview',
      }
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: [],
        detailProduct: [],
        previewProduct: [],
        status: 'updated',
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
    case SELLER:
      return {
        ...state,
        seller: action.payload,
      }
    case EMPTY_DETAIL:
      return {
        ...state,
        product: '',
        detailProduct: '',
        seller: '',
      }
    default:
      return state
  }
}

export default productReducer
