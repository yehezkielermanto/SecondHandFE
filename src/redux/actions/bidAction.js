import Swal from 'sweetalert2'
import {
  CREATE_TRANSACTION,
  DETAIL_TRANSACTION,
  PRODUCT_ERROR,
  TRANSACTION_ERROR,
} from './types'
const { REACT_APP_ENDPOINT } = process.env

export const createBid = (params) => async (dispatch) => {
  const { productId, sellerId } = params
  try {
    // masukkan ke tabel transaksi
    const response = await fetch(
      REACT_APP_ENDPOINT +
        '/api/v1/transaction?' +
        new URLSearchParams({ sellerid: sellerId, productid: productId }),
      {
        method: 'post',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      },
    )
    const data = await response.json()
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCT_ERROR })
  }
}

export const fetchTrans = () => async (dispatch) => {
  try {
    // ambil data dari transaksi
    const fetchTransaction = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/transaction',
      { method: 'get', headers: { 'Content-Type': 'application/json' } },
    )

    const transaction = await fetchTransaction.json()

    // ambil gambar barang

    let i = 0

    while (i < transaction.transaction.length) {
      // action komunikasi dengan backend untuk ambil detail gambar dari imagekit
      const fetchImgDetail = await fetch(
        `${REACT_APP_ENDPOINT}/api/v1/products/picture/${transaction.transaction[i].barang.gambarbarangs[0].gambar}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } },
      )
      const imgDetail = await fetchImgDetail.json()
      transaction.transaction[i].gambarProduk = imgDetail.gambar
      i++
    }
    dispatch({ type: CREATE_TRANSACTION, payload: transaction })
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCT_ERROR })
  }
}

// find bid transaction
export const fetchTransId = (id) => async (dispatch) => {
  try {
    // console.log(id)
    const fetchTransaction = await fetch(
      REACT_APP_ENDPOINT + '/api/v1/transaction/' + id,
      { method: 'get', headers: { 'Content-Type': 'application/json' } },
    )
    const result = await fetchTransaction.json()
    // ---------------ambil gambar barang

    // action komunikasi dengan backend untuk ambil detail gambar dari imagekit
    const fetchImgDetail = await fetch(
      `${REACT_APP_ENDPOINT}/api/v1/products/picture/${result.bid.bid.barang.gambarbarangs[0].gambar}`,
      { method: 'GET', headers: { 'Content-Type': 'application/json' } },
    )
    const imgDetail = await fetchImgDetail.json()
    result.bid.bid.gambarProduk = imgDetail.gambar

    // ambil gambar user
    const fetchImgDetailUser = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/api/v1/products/picture/${result.bid.bid.user.gambar}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    const imgDetailUser = await fetchImgDetailUser.json()
    result.bid.bid.gambarUser = imgDetailUser.gambar

    dispatch({ type: DETAIL_TRANSACTION, payload: result.bid })
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCT_ERROR })
  }
}

// actions untuk tolak tawaran
export const DeniedBid = (id) => async (dispatch) => {
  try {
    if (id != '') {
      // console.log(id)
      const response = await fetch(
        REACT_APP_ENDPOINT + '/api/v1/transaction/' + id,
        {
          method: 'put',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data.message === 'Token Expired') {
        dispatch({
          type: LOGOUT,
        })
        return
      }
    }
  } catch (error) {
    dispatch({ type: TRANSACTION_ERROR, payload: error.message })
  }
}

// terima tawaran harga
export const AcceptBid = (id) => async (dispatch) => {
  try {
    if (id != '') {
      const response = await fetch(
        REACT_APP_ENDPOINT + '/api/v1/transaction/product/' + id,
        {
          method: 'put',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data.message === 'Token Expired') {
        dispatch({
          type: LOGOUT,
        })
        return
      }
    }
  } catch (error) {
    dispatch({ type: TRANSACTION_ERROR, payload: error.message })
  }
}

// selesaikan transaksi
export const soldProduct = (id) => async (dispatch) => {
  try {
    if (id != '') {
      // console.log(id)
      const response = await fetch(
        REACT_APP_ENDPOINT +
          `/api/v1/transaction/doneTrans/${id.idtrans}/${id.idbarang}`,
        {
          method: 'put',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data.message === 'Token Expired') {
        dispatch({
          type: LOGOUT,
        })
        return
      }
    }
  } catch (error) {
    dispatch({ type: TRANSACTION_ERROR, payload: error.message })
  }
}

// batalkan transaksi
export const declineTrans = (id) => async (dispatch) => {
  try {
    if (id != '') {
      const response = await fetch(
        REACT_APP_ENDPOINT + `/api/v1/transaction/declineTrans/${id.idtrans}`,
        {
          method: 'put',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data.message === 'Token Expired') {
        dispatch({
          type: LOGOUT,
        })
        return
      }
    }
  } catch (error) {
    dispatch({ type: TRANSACTION_ERROR, payload: error.message })
  }
}

// make status_pembelian = false
export const makeFalseStatus = (params) => async (dispatch) => {
  try {
    if (params != '') {
      const response = await fetch(
        REACT_APP_ENDPOINT +
          `/api/v1/transaction/makeFalse/${params.iduser}/${params.idbarang}`,
        {
          method: 'put',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      if (data.message === 'Token Expired') {
        dispatch({
          type: LOGOUT,
        })
        return
      }
    }
  } catch (error) {
    console.log(error.message)
    dispatch({ type: TRANSACTION_ERROR })
  }
}
