import {GET_USER, USERS_ERROR, LOGOUT, JUST_UPDATED} from './types'
import Swal from "sweetalert2";

const usersError = (error) => async (dispatch) => {
    Swal.fire({
      position: "center",
      icon: "error",
      titleText: "Somethings wrong",
      showConfirmButton: false,
      timer: 1000,
    });
    
  dispatch({
    type: USERS_ERROR,
    payload: error.message,
  })

  setTimeout(() => {
    dispatch({
      type: USERS_ERROR,
      payload: null,
    })
  }, 5000)
}

export const fetchUser = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/siapaSaya`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json()

        // console.log("ACTION, " + result)
        // console.log("ACTIONnn, " + JSON.stringify(result.data));

        dispatch({
          type: GET_USER,
          payload: result.data,
        });

        // if(result) {
        //     dispatch({
        //         type: GET_USER,
        //         payload: response.data,
        //     })
        // } 

        // check if token expired
        if (result.message === 'Token expired') {
            dispatch({
                type: LOGOUT,
            })
        } else {
            // alert(result.message);
            usersError(result.error)
        }
    } catch (error) {
        usersError(error)
    }
}

export const submitUpdate = (data) => async (dispatch) => {
  try {
    const nama = data.nama;
    const idkota = data.kota;
    const alamat = data.alamat;
    const nohp = data.nohp;
    const gambar = data.imgProfile;
    const idUpdate = data.idUser;

    let toSendFull = { nama, alamat, nohp, gambar, idkota };

    const token = localStorage.getItem("token");

    alert("ID TO SEND, " + idUpdate+ ", NAMA, "+nama);

    const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/${idUpdate}`, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: nama, idkota, alamat, nohp, gambar,
    });

    const result = await response.json();
    
    if (result.token) {
      dispatch({
        type: JUST_UPDATED,
        payload: result.token,
      });
    } else {
      //alert(result.message)
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: result.error,
        showConfirmButton: false,
        timer: 950,
      });
      authError(result.error);
    }
  } catch (error) {
    authError(error);
  }
};

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  });

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    });
  }, 5000);
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};