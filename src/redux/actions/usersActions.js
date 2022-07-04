import { GET_USER, USERS_ERROR, JUST_UPDATED, LOGOUT } from "./types";

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

    /* check if token expired */
    if (result.message === "Token Expired") {
      dispatch({
        type: LOGOUT,
      });
      return;
    }

    const fetchImgDetail = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/profileImg/details/${result.data.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const imgDetail = await fetchImgDetail.json();

    if (imgDetail.status === "FAILED") {
      dispatch({
        type: USERS_ERROR,
        payload: imgDetail.message,
      });
      return;
    }

    result.data.imgFileData = imgDetail.dataImg;

    if (result.status === "OK") {
      dispatch({
        type: GET_USER,
        payload: result.data,
      });
    } else {
      dispatch({
        type: USERS_ERROR,
        payload: result.message,
      });
    }
  } catch (error) {
    // usersError(error.message);
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};

export const submitUpdate = (data) => async (dispatch) => {
  try {
    const idUpdate = data.idUser;
    const formdata = new FormData();
    const token = localStorage.getItem("token");

    // const namaT = data.nama
    // console.log("TEST DATA, " + namaT);

    if (data.nama === undefined) {
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

    const requestOptions = {
      method: "PUT",
      body: formdata,
      headers: { Authorization: `Bearer ${token}` },
      redirect: "follow",
    };

    // console.log(idUpdate);

    const response = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/update/${idUpdate}`, requestOptions);

    const result = await response.json();

    /* check if token expired */
    if (result.message === "Token Expired") {
      dispatch({
        type: LOGOUT,
      });
      return;
    }

    /* TO FETCH USER DATA */
    const fetchUserData = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/siapaSaya`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const resultUserData = await fetchUserData.json();

    /* CHECKING IF FETCH DATA PROCCESS ERROR */
    if (resultUserData.status === "FAILED") {
      dispatch({
        type: USERS_ERROR,
        payload: resultUserData.message,
      });
      return;
    }

    /* TO FETCH USER's IMG DETAIL FROM IMAGEKIT */
    const fetchImgDetail = await fetch(`${process.env.REACT_APP_URLENDPOINT}/api/v1/users/profileImg/details/${resultUserData.data.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const imgDetail = await fetchImgDetail.json();

    if (imgDetail.status === "FAILED") {
      dispatch({
        type: USERS_ERROR,
        payload: imgDetail.message,
      });
      return;
    }

    resultUserData.data.imgFileData = imgDetail.dataImg;

    console.log("HASIL UPDATE, ");
    console.log(result)

    if (result.status === "OK") {
      dispatch({
        type: JUST_UPDATED,
        payload: resultUserData.data,
      });
    } else {
      dispatch({
        type: USERS_ERROR,
        payload: result.message,
      });
    }
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
