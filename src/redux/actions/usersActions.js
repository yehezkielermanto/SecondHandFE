import {GET_USER, USERS_ERROR, LOGOUT} from './types'
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
        const response = await fetch(process.env.REACT_APP_ENDPOINT_AKU, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })

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
    const toSendNama = data.nama;
    const toSendKota = data.kota;
    const toSendAlamat = data.alamat;
    const toSendNohp = data.nohp;
    const idUpdate = data.idUser;

    let toSendFull = {toSendNama, toSendKota, toSendAlamat, toSendNohp}
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_UPDATEUSER}/${idUpdate}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSendFull),
    });

    const result = await response.json();
    
    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
      });
    } else {
      //alert(result.message)
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: result.message,
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