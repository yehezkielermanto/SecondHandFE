import { GET_USER, USERS_ERROR, JUST_UPDATED } from "./types";
import Swal from "sweetalert2";

export const fetchUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/siapaSaya`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    // console.log("ACTION, " + result)
    // console.log("ACTIONnn, " + JSON.stringify(result.data));

    dispatch({
      type: GET_USER,
      payload: result.data,
    });

    // check if token expired
    if (result.message === "Token expired") {
      dispatch({
        type: LOGOUT,
      });
    }

  } catch (error) {
    // usersError(error.message);
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
    return;
  }
};

export const submitUpdate = (data) => async (dispatch) => {

    const idUpdate = data.idUser;
    const formdata = new FormData();
    const token = localStorage.getItem("token");

    const namaT = data.nama;

    // console.log("TEST DATA, " + namaT);

    if (data.nama === undefined ) {
        dispatch({
          type: USERS_ERROR,
          payload: "Nama kosong",
        });
        return;
    }
    
    if (data.alamat == undefined || data.alamat == null) {
      dispatch({
        type: USERS_ERROR,
        payload: "Alamat kosong",
      });
      return;
    } 
    
    if (data.nohp == undefined || data.nohp == null) {
      dispatch({
        type: USERS_ERROR,
        payload: "No. HP Kosong !",
      });
      return;
    } 

    if (data.kota == undefined || data.kota == null) {
      dispatch({
        type: USERS_ERROR,
        payload: "Kota Belum Terpilih",
      });
      return;
    } 

    console.log("IMGNYA, " + data.gambar);
    
    console.log("WITh IMG");
    formdata.append("nama", data.nama);
    formdata.append("alamat", data.alamat);
    formdata.append("nohp", data.nohp);
    formdata.append("gambar", data.gambar);
    formdata.append("idkota", data.kota);

    console.log(formdata.nama);

    const requestOptions = {
      method: "PUT",
      body: formdata,
      headers: { Authorization: `Bearer ${token}` },
      redirect: "follow",
    };

    // console.log(idUpdate);

    try {
      const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/update/${idUpdate}`, requestOptions);

      const result = await response.json();

      if (result.status === "OK") {
        dispatch({
          type: JUST_UPDATED,
        });
      } else {
        // usersError(result.error.message);
        dispatch({
          type: USERS_ERROR,
          payload: result.error,
        });
        return;
      }
    } catch (error) {
      dispatch({
        type: USERS_ERROR,
        payload: error,
      });
    }

    /*
    if (data.gambar === undefined || data.gambar === null) {
      console.log("WITHOUT IMG");
      formdata.append("nama", data.nama);
      formdata.append("alamat", data.alamat);
      formdata.append("nohp", data.nohp);
      formdata.append("idkota", data.kota);
      formdata.append("gambar", "");

      console.log(formdata.nama)

      const requestOptions = {
        method: "PUT",
        body: formdata,
        headers: { Authorization: `Bearer ${token}` },
        redirect: "follow",
      };

      try {
        console.log("ID UPDATE, "+idUpdate)
        const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/usersNP/${idUpdate}`, requestOptions);

        const result = await response.json();

        if (result.status === "OK") {
          dispatch({
            type: JUST_UPDATED,
          });
        } else {
          dispatch({
            type: USERS_ERROR,
            payload: result.error.message,
          });
          return;
        }
      } catch (error) {
        // usersError(error.message);
        dispatch({
          type: USERS_ERROR,
          payload: result.error.message,
        });
        return;
      }
    } else {
      //
      console.log("WITh IMG");
      formdata.append("nama", data.nama);
      formdata.append("alamat", data.alamat);
      formdata.append("nohp", data.nohp);
      formdata.append("gambar", data.gambar);
      formdata.append("idkota", data.kota);

      console.log(formdata.nama)

      const requestOptions = {
        method: "PUT",
        body: formdata,
        headers: { Authorization: `Bearer ${token}` },
        redirect: "follow",
      };

      // console.log(idUpdate);

      try {
        const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/update/${idUpdate}`, requestOptions);

        const result = await response.json();

        if (result.status === "OK") {
          dispatch({
            type: JUST_UPDATED,
          });
        } else {
          // usersError(result.error.message);
          dispatch({
            type: USERS_ERROR,
            payload: result.error.message,
          });
          return;
        }

      } catch (error) {
        dispatch({
          type: USERS_ERROR,
          payload: error,
        });
      }
    }
    */
};
