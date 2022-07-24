import { CATEGORY, CATEGORY_ERROR } from './types'

export const categoryError = (error) => async (dispatch) => {
  dispatch({
    type: CATEGORY_ERROR,
    payload: error.message,
  })

  setTimeout(() => {
    dispatch({
      type: CATEGORY_ERROR,
      payload: null,
    })
  }, 5000)
}

export const listCategory = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/api/v1/category`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const result = await response.json()

    if (result != '') {
      dispatch({
        type: CATEGORY,
        payload: result.category,
      })
    } else {
      dispatch({
        type: CATEGORY_ERROR,
        payload: '',
      })
    }
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: CATEGORY_ERROR,
      payload: error.message,
    })
  }
}
