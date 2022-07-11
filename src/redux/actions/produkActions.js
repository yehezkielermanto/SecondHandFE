import Swal from 'sweetalert2'

import {
  GET_ALL_PRODUCT,
  PRODUCT_ERROR,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  TEMP_PRODUCT,
  EDIT_PRODUCT,
  NEW_PRODUCT,
  TERIMA_PENAWARAN,
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

// --------------------------------------------------------------------action get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await fetch(`${REACT_APP_URLENDPOINT}/api/v1/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: token,
      },
    })

    const data = await response.json()
    // console.log(data.data.barang.length)
    let j = 0
    let i = 0
    if (data !== '') {
      while (i < data.data.barang.length) {
        // console.log(data.data.barang[i].gambarbarangs)
        for (j = 0; j < data.data.barang[i].gambarbarangs.length; j++) {
          // console.log(data.data.barang[i].gambarbarangs[j].gambar)
          const fetchImgDetail = await fetch(
            `${process.env.REACT_APP_URLENDPOINT}/api/v1/products/picture/${data.data.barang[i].gambarbarangs[j].gambar}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )

          const imgDetail = await fetchImgDetail.json()
          // console.log(imgDetail)
          if (imgDetail.status === 'FAILED') {
            dispatch({
              type: USERS_ERROR,
            })
            return
            // console.log(data);
          }
          // data.data.barang[i].gambarbarangs[j].gambar = imgDetail.gambar
          // gambar.push(imgDetail.gambar)
          data.data.barang[i].gambarProduk = imgDetail.gambar
        }
        i++
      }
      dispatch({ type: GET_ALL_PRODUCT, payload: data.data })
    } else {
      console.log(error.message)
      dispatch({
        type: PRODUCT_ERROR,
        payload: error.response,
      })
    }
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    })
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

// let token = "";
// if (localStorage.getItem("token"))
//   token = `Bearer ${localStorage.getItem("token")}`;

export const getProductByKategori = (params) => async (dispatch) => {
  try {
    const response = await fetch(
      REACT_APP_URLENDPOINT +
        '/api/v1/product/kategori?' +
        new URLSearchParams({ idkategori: params }),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: token,
        },
      },
    )
    const data = await response.json()

    let j = 0
    let i = 0

    while (i < data.barang.length) {
      // console.log(data.data.barang[i].gambarbarangs)
      for (j = 0; j < data.barang[i].gambarbarangs.length; j++) {
        // console.log(data.data.barang[i].gambarbarangs[j].gambar)
        const fetchImgDetail = await fetch(
          `${process.env.REACT_APP_URLENDPOINT}/api/v1/products/picture/${data.barang[i].gambarbarangs[j].gambar}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        const imgDetail = await fetchImgDetail.json()
        // console.log(imgDetail)
        if (imgDetail.status === 'FAILED') {
          dispatch({
            type: USERS_ERROR,
          })
          return
          // console.log(data);
        }
        // data.data.barang[i].gambarbarangs[j].gambar = imgDetail.gambar
        // gambar.push(imgDetail.gambar)
        data.barang[i].gambarProduk = imgDetail.gambar
      }
      i++
    }
    console.log(data)
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data,
      status: 'GET_ALL',
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: PRODUCT_ERROR,
      payload: error.response,
    })

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

// -------------------------------action add new product
export const newProduct = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const formdata = new FormData()

    formdata.append('kategori', data.kategori)
    formdata.append('nama', data.namaProduk)
    formdata.append('harga', data.hargaProduk)
    formdata.append('deskripsi', data.deskripsi)
    for (let i = 0; i < data.dataGambar.length; i++) {
      formdata.append('image', data.dataGambar[i])
    }
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
        title: 'Barang berhasil diterbitkan',
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
      const response = await fetch(
        REACT_APP_URLENDPOINT + '/api/v1/cities/' + data.kota,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      const findCateg = await fetch(
        REACT_APP_URLENDPOINT + '/api/v1/category/' + data.kategori,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      const result = await response.json()
      const category = await findCateg.json()
      const kota = result.city.nama_kota
      dispatch({
        type: TEMP_PRODUCT,
        payload: {
          namaProduk: data.namaProduk,
          hargaProduk: data.hargaProduk,
          kategori: data.kategori,
          deskripsi: data.deskripsi,
          gambar: data.gambar,
          kota: kota,
          dataGambar: data.dataGambar,
          namaKategori: category.category.nama_kategori,
        },
      })
    }
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR })
  }
}

export const editProduct = (data) => async (dispatch) => {
  try {
    if (data != '') {
      dispatch({ type: EDIT_PRODUCT, payload: data })
    }
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR })
  }
}

export const statusAddProduct = () => async (dispatch) => {
  dispatch({ type: NEW_PRODUCT })
}

export const terimaPenawaran = () => async (dispatch) => {
  dispatch({ type: TERIMA_PENAWARAN })
}
