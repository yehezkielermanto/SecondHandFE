import {GET_USER, USERS_ERROR, LOGOUT} from './types'

const usersError = (error) => async (dispatch) => {
  dispatch({
    type: USERS_ERROR,
    payload: error.message,
  })

  setTimeout(() => {
    dispatch({
      type: USERS_ERROR,
      payload: null,
    })
  }, 5000)
}

export const fetchUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(process.env.REACT_APP_ENDPOINT_AKU, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })

        const result = await response.json()

        if(result) {
            dispatch({
                type: GET_USER,
                payload: response.data,
            })
        }

        // check if token expired
        if (result.message === 'Token expired') {
            dispatch({
                type: LOGOUT,
            })
        } else {
            // alert(result.message);
            usersError(result.error)
        }
    } catch (error) {
        usersError(error)
    }
}