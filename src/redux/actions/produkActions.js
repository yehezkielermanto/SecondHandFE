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
  DETAIL_PRODUCT,
  EMPTY_DETAIL,
  SELLER,
  TEMP_PRODUCT_EDIT,
  UPDATE_PRODUCT,
} from './types'
const { REACT_APP_ENDPOINT } = process.env

// action delete product
export const deleteProduct = (params) => async (dispatch) => {
  try {
    const response = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/products/' + params.id,

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
    const response = await fetch(`${REACT_APP_ENDPOINT}/api/v1/products`, {
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
    // console.log(data.data)
    if (data.message !== 'Product is Empty') {
      while (i < data.data.barang.length) {
        // console.log(data.data.barang[i].gambarbarangs[0].gambar);
        // return;
        // for (j = 0; j < data.data.barang[i].gambarbarangs.length; j++) {
        const fetchImgDetail = await fetch(
          `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${data.data.barang[i].gambarbarangs[0].gambar}`,
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
        // }
        i++
      }
      // console.log(data.data)
      dispatch({ type: GET_ALL_PRODUCT, payload: data.data })
    } else if (data.message == 'Product is Empty') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Produk masih kosong',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
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

//------------------------------------------------------------------search by nama

export const getProductByNama = (params) => async (dispatch) => {
  try {
    const nama = params
    const response = await fetch(
      REACT_APP_ENDPOINT +
        '/api/v1/product/nama?' +
        new URLSearchParams({
          nama,
        }),
    )
    const data = await response.json()
    // ambil gambar
    let i = 0
    while (i < data.length) {
      // console.log(data.data.barang[i].gambarbarangs[0].gambar);
      // return;
      // for (j = 0; j < data.data.barang[i].gambarbarangs.length; j++) {
      const fetchImgDetail = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${data[i].gambarbarangs[0].gambar}`,
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

      data[i].gambarProduk = imgDetail.gambar
      // }
      i++
    }
    // console.log({ barang: data })

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: { barang: data },
      status: 'GET_ALL',
    })
  } catch (error) {
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

// --------------------filter products by category
export const getProductByKategori = (params) => async (dispatch) => {
  try {
    const response = await fetch(
      REACT_APP_ENDPOINT +
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
      // for (j = 0; j < data.barang[i].gambarbarangs.length; j++) {
      // console.log(data.data.barang[i].gambarbarangs[j].gambar)
      const fetchImgDetail = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${data.barang[i].gambarbarangs[j].gambar}`,
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
      // }
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
      `${REACT_APP_ENDPOINT}/api/v1/products`,
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

// -------------------------------Update product
export const updateProduct = (data) => async (dispatch) => {
  try {
    console.log(data.dataGambar.length)
    var formdata = new FormData()
    formdata.append('nama', data.namaProduk)
    formdata.append('harga', data.hargaProduk)
    formdata.append('kategori', data.kategori)
    formdata.append('deskripsi', data.deskripsi)
    // Upload File Image
    for (var i = 0; i < data.dataGambar.length; i++) {
      if (
        data.dataGambar[i].type === 'image/jpeg' ||
        data.dataGambar[i].type === 'image/png'
      ) {
        formdata.append('image', data.dataGambar[i])
      }
    }

    const response = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/products/' + data.id,
      {
        method: 'PUT',
        body: formdata,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
    // respon status

    if (response.status === 200) {
      const data = await response.json()

      dispatch({
        type: UPDATE_PRODUCT,
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Berhasil',
        text: 'Data berhasil diupdate',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      const data = await response.json()

      dispatch({
        type: UPDATE_PRODUCT,
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
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

export const tempProduct = (data) => async (dispatch) => {
  try {
    if (data != '') {
      // =======================ambil data kota dari tabel kota di database
      const response = await fetch(
        REACT_APP_ENDPOINT + '/api/v1/cities/' + data.kota,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      // ====================ambil nama kategori dari tabel kategori
      const findCateg = await fetch(
        REACT_APP_ENDPOINT + '/api/v1/category/' + data.kategori,
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

// preview edit products
export const viewEditProduct = (data) => async (dispatch) => {
  try {
    if (data != '') {
      // =======================ambil data kota dari tabel kota di database
      const response = await fetch(
        REACT_APP_ENDPOINT + '/api/v1/cities/' + data.kota,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      // ====================ambil nama kategori dari tabel kategori
      const findCateg = await fetch(
        REACT_APP_ENDPOINT + '/api/v1/category/' + data.kategori,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      const result = await response.json()
      const category = await findCateg.json()
      const kota = result.city.nama_kota
      console.log(data.image)
      dispatch({
        type: TEMP_PRODUCT_EDIT,
        payload: {
          namaProduk: data.namaProduk,
          hargaProduk: data.hargaProduk,
          kategori: data.kategori,
          deskripsi: data.deskripsi,
          gambar: data.gambar,
          kota: kota,
          dataGambar: data.dataGambar,
          namaKategori: category.category.nama_kategori,
          fileImage: data.image,
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

// ================get products by id
export const fetchProductsById = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/products/' + id,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } },
    )
    const result = await response.json()

    // ambil/fecth image products
    let i = 0
    let gambar = []
    while (i < result.gambarbarangs.length) {
      // console.log(data.data.barang[i].gambarbarangs)
      // for (j = 0; j < data.barang[i].gambarbarangs.length; j++) {
      // console.log(data.data.barang[i].gambarbarangs[j].gambar)
      const fetchImgDetail = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${result.gambarbarangs[i].gambar}`,
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
      gambar.push(imgDetail.gambar)
      // }
      i++
    }
    result.gambarProduk = gambar
    // console.log(result)
    dispatch({ type: DETAIL_PRODUCT, payload: result })
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCT_ERROR })
  }
}

// ==================filter products by user id
export const filterProducts = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/filterProducts',
      {
        method: 'GET',
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const data = await response.json()
    let j = 0
    let i = 0
    if (data !== '') {
      while (i < data.data.barang.length) {
        // console.log(data.data.barang[i].gambarbarangs)
        // for (j = 0; j < data.data.barang[i].gambarbarangs.length; j++) {
        // console.log(data.data.barang[i].gambarbarangs[j].gambar)
        const fetchImgDetail = await fetch(
          `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${data.data.barang[i].gambarbarangs[j].gambar}`,
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
        // }
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
    dispatch({ type: PRODUCT_ERROR })
  }
}

// filter products by category Auth
export const filterProductsCategAuth = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(
      REACT_APP_ENDPOINT +
        '/api/v1/filterProductsCateg?' +
        new URLSearchParams({ idkategori: id }),
      {
        method: 'GET',
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const data = await response.json()
    let j = 0
    let i = 0
    if (data !== '') {
      while (i < data.data.barang.length) {
        // console.log(data.data.barang[i].gambarbarangs)
        // for (j = 0; j < data.data.barang[i].gambarbarangs.length; j++) {
        // console.log(data.data.barang[i].gambarbarangs[j].gambar)
        const fetchImgDetail = await fetch(
          `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${data.data.barang[i].gambarbarangs[j].gambar}`,
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
        // }
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
    dispatch({ type: PRODUCT_ERROR })
  }
}

// empty detail products
export const emptyDetailProduct = () => async (dispatch) => {
  dispatch({ type: EMPTY_DETAIL })
}

export const fetchProfileSeller = (data) => async (dispatch) => {
  try {
    const kota = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/cities/' + data.idkota,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      },
    )

    const fetchImgDetail = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${data.idgambar}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const imgDetail = await fetchImgDetail.json()

    const result = await kota.json()

    dispatch({
      type: SELLER,
      payload: { imgDetail, kota: result.city.nama_kota },
    })
  } catch (error) {
    console.log(error)
    dispatch({ type: PRODUCT_ERROR })
  }
}
