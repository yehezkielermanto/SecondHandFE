import {
  AUTH_ERROR,
  isGOOGLELOGIN,
  LOGIN,
  LOGOUT,
  isREGISTER,
  DELETE_DATA_USER,
  GET_ALL_PRODUCT,
  DELETE_TRANSACTION,
} from './types'
// const { process.env.REACT_APP_ENDPOINT } = process.env
import Swal from 'sweetalert2'

// register new user
export const registerUser = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/api/v1/auth/register`,
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
        titleText: 'Berhasil Registrasi',
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
        titleText: 'Gagal registrasi atau email telah digunakan',
        showConfirmButton: false,
        timer: 1000,
      })
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

// login action
export const loginViaForm = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/api/v1/auth/login`,
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
        titleText: 'Berhasil Masuk',
        showConfirmButton: false,
        timer: 1000,
      })
      dispatch({
        type: LOGIN,
        payload: result.token,
      })
      // alert('Login berhasil')
    } else if (result.message == 'Email not found') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: 'Email tidak ditemukan',
        showConfirmButton: false,
        timer: 1000,
      })
      authError(result.error)
    } else if (result.message == 'Password incorrect') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: 'Password salah',
        showConfirmButton: false,
        timer: 1000,
      })
      authError(result.error)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: 'Gagal login',
        showConfirmButton: false,
        timer: 1000,
      })
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
      `${process.env.REACT_APP_ENDPOINT}/api/v1/auth/google`,
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
        titleText: 'Berhasil registrasi atau login',
        showConfirmButton: false,
        timer: 1000,
      })
      dispatch({
        type: isGOOGLELOGIN,
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
  dispatch({
    type: DELETE_DATA_USER,
  })
  dispatch({ type: DELETE_TRANSACTION })
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
