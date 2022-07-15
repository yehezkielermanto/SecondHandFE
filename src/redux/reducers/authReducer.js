import {
  AUTH_ERROR,
  isGOOGLELOGIN,
  LOGIN,
  LOGOUT,
  isREGISTER,
} from '../actions/types'

const initialState = {
  isRegister: false,
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  // user: {},
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case isREGISTER:
      return {
        ...state,
        isRegister: true,
        token: null,
        error: null,
      }
    case isGOOGLELOGIN:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isRegister: true,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      }
    case LOGIN:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isRegister: true,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        isRegister: false,
        token: null,
        error: null,
      }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
