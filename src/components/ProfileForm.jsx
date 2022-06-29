import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../public/css/style.css";
import Swal from "sweetalert2";
import { Link, Navigate } from "react-router-dom";
import { fetchUser, submitUpdate } from "../redux/actions/usersActions";
import { listCities } from "../redux/actions/citiesActions";

// if (!isAuthenticated) {
//   return <Navigate to={`/login`} />;
// }

const ProfileHeaderComponent = (props) => {
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const { user, justUpdated, errorU } = useSelector((state) => state.users);
  const { city, errorC } = useSelector((state) => state.cities);

  // const [idUser, setId] = useState();
  const [nama, setNama] = useState();
  const [kota, setKota] = useState();
  const [alamat, setAlamat] = useState();
  const [nohp, setNohp] = useState();
  const [imgProfile, setImg] = useState();
  const fileRef = useRef();

  useEffect(() => {
    (async () => {
      dispatch(listCities());
      // dispatch(fetchUser());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        titleText: error,
        showConfirmButton: false,
        timer: 1000,
      });
      // alert(error);
    }
  }, [error]);

  useEffect(() => {
    if (errorU) {
      Swal.fire({
        position: "center",
        icon: "error",
        titleText: errorU,
        showConfirmButton: false,
        timer: 1000,
      });
      // alert(errorU);
    }
  }, [errorU]);

  useEffect(() => {
    if (errorC) {
      Swal.fire({
        position: "center",
        icon: "error",
        titleText: errorC,
        showConfirmButton: false,
        timer: 2000,
      });
      // alert(errorC);
    }
  }, [errorC]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser());
    } else {
      alert("User Data Not Found !");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (justUpdated) {
      Swal.fire({
        position: "center",
        icon: "success",
        titleText: "Profil Anda Berhasil Terubah !",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [justUpdated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(imgProfile);

    dispatch(
      submitUpdate({
        idUser: user.id,
        nama,
        kota,
        alamat,
        nohp,
        gambar: imgProfile,
      })
    );
  };

  // console.log("USERNYA, "+user)
  // console.log("USERNYAaa, " + JSON.stringify(user));
  return (
    <>
      {/* Main Content */}
      {!justUpdated ? (
        <div className="flex flex-col h-full sm:w-full lg:w-6/12 lg:mx-auto mt-5 px-3 text-left">
          <Link to="/user">
            <div className="invisible lg:visible p-0 w-10 flex justify-center hover:bg-violet-800 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="block ml-0 my-1 h-5 w-5 hover:fill-neutral-50" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
          {!isAuthenticated ? (
            <Navigate to="/" />
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" value={user.id} onChange={(e) => setId(e.target.value)} />
              <div className="flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col p-0 w-20 justify-center items-center bg-violet-300 hover:bg-violet-400 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
                >
                  <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input id="dropzone-file" type="file" ref={fileRef} onChange={(e) => setImg(e.target.files[0])} className="hidden" />
                </label>
              </div>
              {/* <br /> */}
              <br />
              <p className="mb-2 text-xs font-poppins">
                Nama<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                <h3 className="mb-1">Nama Sekarang: {user.nama}</h3>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                  placeholder="Masukan Nama"
                />
              </div>
              <h3 className="mb-1">Kode Kota Sekarang: {user.idkota}</h3>
              {/* <br/> */}
              <p className="mb-2 text-xs font-poppins">
                Kota<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                <select
                  className="block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="kota"
                  onChange={(e) => setKota(e.target.value)}
                >
                  <option value="" selected>
                    Pilih Kota
                  </option>
                  {city.length === 0 ? (
                    <option value="">Daftar Kota Kosong</option>
                  ) : (
                    city.map((kota) => (
                      <option value={kota.id}>
                        {kota.id}-{kota.nama_kota}
                      </option>
                    ))
                  )}
                </select>
              </div>
              {/* <br /> */}
              <p className="mb-2 text-xs font-poppins">
                Alamat<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                <h3 className="mb-1">Alamat Sekarang: {user.alamat}</h3>
                <textarea
                  className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  value={alamat}
                  name="alamat"
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Contoh: Jalan Kulon No. 2"
                ></textarea>
              </div>
              {/* <br/> */}
              <p className="mb-2 text-xs font-poppins">
                No. Handphone<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                <h3 className="mb-1">No. Handphone Sekarang: {user.nohp}</h3>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  value={nohp}
                  name="nohp"
                  onChange={(e) => setNohp(e.target.value)}
                  placeholder="Contoh: +6285739103132"
                />
              </div>
              <br />
              <button className="bg-violet-700 hover:bg-violet-900 w-full p-1.5 rounded-lg">
                <span className="text-white font-medium">Simpan</span>
              </button>
            </form>
          )}
        </div>
      ) : (
        <Navigate to="/user" />
      )}
    </>
  );
};

export default ProfileHeaderComponent;
