import { GET_CITIES, CITIES_ERROR, LOGOUT } from './types'

// const citiesError = (error) => async (dispatch) => {
// dispatch({
//   type: CITIES_ERROR,
//   payload: error.message,
// });

//   setTimeout(() => {
//     dispatch({
//       type: CITIES_ERROR,
//       payload: null,
//     });
//   }, 5000);
// };

export const listCities = () => async (dispatch) => {
  try {
    // const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/api/v1/cities`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const result = await response.json()

    // console.log("ACTION CITY, " + JSON.stringify(result.allCity.city))

    if (result) {
      dispatch({
        type: GET_CITIES,
        payload: result.allCity.city,
      })
    }

    // check if token expired
    if (result.message === 'Token expired') {
      dispatch({
        type: LOGOUT,
      })
    } else {
      dispatch({
        type: CITIES_ERROR,
        payload: result.error,
      })
    }
  } catch (error) {
    dispatch({
      type: CITIES_ERROR,
      payload: error,
    })
  }
}
