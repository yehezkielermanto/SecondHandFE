import Swal from "sweetalert2";

import { GET_ALL_PRODUCT, PRODUCT_ERROR, DELETE_PRODUCT } from "./types";
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

export const getAllProducts = () => async (dispatch) => {
  let token = "";
  if (localStorage.getItem("token"))
    token = `Bearer ${localStorage.getItem("token")}`;

  try {
    const response = await fetch(REACT_APP_URLENDPOINT + "/api/v1/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data,
      status: "GET_ALL",
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });
    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

export const getProductByKategori = (params) => async (dispatch) => {
  let token = "";
  if (localStorage.getItem("token"))
    token = `Bearer ${localStorage.getItem("token")}`;

  try {
    const response = await fetch(
      REACT_APP_URLENDPOINT +
        "/api/v1/product/kategori?" +
        new URLSearchParams({ kategori: params }),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data,
      status: "GET_ALL",
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
