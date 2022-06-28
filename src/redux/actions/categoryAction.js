import { CATEGORY, CATEGORY_ERROR } from "./types"
const {REACT_APP_URLENDPOINT} = process.env

export categoryError = (error) => async(dispatch)=>{
  dispatch({
    type: CATEGORY_ERROR,
    payload: error.message
  })

  setTimeout(()=>{
    dispatch({
      type: CATEGORY_ERROR,
      payload: null
    })
  }, 5000)
}

export const listCategory = () => async (dispatch) =>{
  try {
    const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/`)
  } catch (error) {
    
  }
}