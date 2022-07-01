import { CATEGORY, CATEGORY_ERROR } from '../actions/types'

const initialState = {
  category: [],
  error: null,
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        category: action.payload,
        error: null,
      }
    case CATEGORY_ERROR:
      return {
        ...state,
        category: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default categoryReducer
