import { AUTH_ERROR, LOGIN, LOGOUT, isREGISTER } from './types'
const { REACT_APP_URLENDPOINT } = process.env
import Swal from 'sweetalert2'

// register new user
export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${REACT_APP_URLENDPOINT}/api/v1/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    const result = await response.json()
    if (result.data) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Success Register',
        showConfirmButton: false,
        timer: 1000,
      })
      dispatch({
        type: isREGISTER,
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: 'Failed Register or Email is used before',
        showConfirmButton: false,
        timer: 1000,
      })
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

export const loginViaForm = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${REACT_APP_URLENDPOINT}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    if (result.token) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Login Successfully',
        showConfirmButton: false,
        timer: 1000,
      })
      dispatch({
        type: LOGIN,
        payload: result.token,
      })
    } else {
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    }
    const response = await fetch(
      `${REACT_APP_URLENDPOINT}/api/v1/auth/google`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )
    const result = await response.json()
    if (result.token) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Success Login or Register',
        showConfirmButton: false,
        timer: 1000,
      })
      dispatch({
        type: LOGIN,
        payload: result.token,
      })
    } else {
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  })

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    })
  }, 5000)
}
