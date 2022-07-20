import {
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  DETAIL_TRANSACTION,
  TRANSACTION_ERROR,
} from '../actions/types'
const initialState = {
  transaction: '',
  detailTrans: '',
}

const bidReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION:
      return {
        ...state,
        transaction: action.payload,
      }
    case DETAIL_TRANSACTION:
      return {
        ...state,
        detailTrans: action.payload,
      }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transaction: '',
        detailTrans: '',
      }
    case TRANSACTION_ERROR:
      return {
        ...state,
        transaction: action.payload,
      }
    default:
      return state
  }
}

export default bidReducer
