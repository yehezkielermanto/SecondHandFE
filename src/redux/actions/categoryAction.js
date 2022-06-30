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
      `${process.env.REACT_APP_URLENDPOINT}/api/v1/category`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const result = await response.json()

    console.log(result)
    if (result) {
      dispatch({
        type: CATEGORY,
        payload: result.list,
      })
    }
  } catch (error) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: error,
    })
  }
}
