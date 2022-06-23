import { GET_USER, USERS_ERROR, LOGOUT } from "./types";

const citiesError = (error) => async (dispatch) => {
  dispatch({
    type: CITIES_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: CITIES_ERROR,
      payload: null,
    });
  }, 5000);
};

export const listCities = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(process.env.REACT_APP_ENDPOINT_LISTCITIES, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (result) {
      dispatch({
        type: GET_USER,
        payload: response.allCity,
      });
    }

    // check if token expired
    if (result.message === "Token expired") {
      dispatch({
        type: LOGOUT,
      });
    } else {
      // alert(result.message);
      citiesError(result.error);
    }
  } catch (error) {
    citiesError(error);
  }
};
