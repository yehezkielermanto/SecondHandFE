/* eslint-disable no-unused-vars */
import {
  DELETE_DATA_USER,
  GET_USER,
  JUST_UPDATED,
  USERS_ERROR,
} from '../actions/types'

const initialState = {
  user: {},
  justUpdated: false,
  errorU: null,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        justUpdated: false,
        errorU: null,
      }
    case JUST_UPDATED:
      console.log('JUST UPDATED LOAD')
      return {
        ...state,
        user: action.payload,
        justUpdated: true,
        errorU: null,
      }
    case USERS_ERROR:
      return {
        ...state,
        errorU: action.payload,
        justUpdated: false,
      }
    case DELETE_DATA_USER:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default usersReducer
