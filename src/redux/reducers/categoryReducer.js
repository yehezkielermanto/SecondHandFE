import { CATEGORY, CATEGORY_ERROR } from '../actions/types'

const initialState = {
  category: [],
  errorC: null,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
        errorC: null,
      }
    case CATEGORY_ERROR:
      return {
        ...state,
        category: [],
        errorC: action.payload,
      }
    default:
      return state
  }
}

export default categoryReducer
