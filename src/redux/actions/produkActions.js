import Swal from "sweetalert2";

import { PRODUCT_ERROR, DELETE_PRODUCT } from "./types";
const { REACT_APP_URLENDPOINT } = process.env;

export const deleteProduct = (params) => async (dispatch) => {
  const { id, oldImage } = params;
  try {
    const response = await fetch(
      REACT_APP_URLENDPOINT +
        "/api/v1/product?" +
        new URLSearchParams({ id, oldImage }),
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const data = await response.json();

    dispatch({
      type: DELETE_PRODUCT,
      payload: data.status,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Delete success",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
