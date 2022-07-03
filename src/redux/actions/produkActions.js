import Swal from 'sweetalert2'

import {
  PRODUCT_ERROR,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  TEMP_PRODUCT,
} from './types'
const { REACT_APP_URLENDPOINT } = process.env

// action delete product
export const deleteProduct = (params) => async (dispatch) => {
  const { id, oldImage } = params
  try {
    const response = await fetch(
      REACT_APP_URLENDPOINT +
        '/api/v1/product?' +
        new URLSearchParams({ id, oldImage }),
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )

    const data = await response.json()

    dispatch({
      type: DELETE_PRODUCT,
      payload: data.status,
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Delete success',
      showConfirmButton: false,
      timer: 1500,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: error,
    })

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error,
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

// action add new product
export const newProduct = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const formdata = new FormData()

    formdata.append('kategori', data.kategori)
    formdata.append('nama', data.namaProduk)
    formdata.append('harga', data.hargaProduk)
    formdata.append('deskripsi', data.deskripsi)
    formdata.append('image', data.gambarProduk)

    console.log(data.gambarProduk.FileList)

    const requestOptions = {
      method: 'POST',
      body: formdata,
      headers: { Authorization: `Bearer ${token}` },
      redirect: 'follow',
    }

    const response = await fetch(
      `${REACT_APP_URLENDPOINT}/api/v1/products`,
      requestOptions,
    )

    const result = await response.json()
    if (result.message === 'New Product Added') {
      dispatch({ type: ADD_PRODUCT })
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New Product Added Successfully',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      dispatch({ type: PRODUCT_ERROR })
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
    })
  }
}

export const tempProduct = (data) => async (dispatch) => {
  try {
    if (data != '') {
      dispatch({ type: TEMP_PRODUCT, payload: data })
    }
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR })
  }
}
