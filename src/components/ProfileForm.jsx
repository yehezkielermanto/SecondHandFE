import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../public/css/style.css";
import { Link, Navigate } from "react-router-dom";
import { fetchUser } from "../redux/actions/authActions";
import { listCities } from "../redux/actions/citiesActions";

// if (!isAuthenticated) {
//   return <Navigate to={`/login`} />;
// }

const ProfileHeaderComponent = () => {

  const dispatch = useDispatch();
  const {isAuthenticated, error} = useSelector((state) => state.auth)

  const { errorU, user } = useSelector((state) => state.users);

  const { errorC, cities } = useSelector((state) => state.cities);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error])

  useEffect(() => {
    if (errorU) {
      alert(errorU);
    }
  }, [errorU]);

  useEffect(() => {
    if (errorC) {
      alert(errorC);
    }
  }, [errorC]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(fetchUser());
  //     dispatch(listCities());
  //   }
  // }, [isAuthenticated])

  // useEffect(() => {
  //   if (user != null) {
  //     dispatch(fetchUser());
  //     dispatch(listCities());
  //   }
  // }, [user]);

  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col h-full sm:w-full lg:w-6/12 lg:mx-auto mt-5 px-3">
        <Link to="/">
          <div className="invisible lg:visible p-0 w-10 flex justify-center hover:bg-violet-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="block ml-0 my-1 h-5 w-5 hover:fill-neutral-50" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </Link>

          <form>
            <div class="flex justify-center items-center w-full">
              <label for="dropzone-file" class="flex flex-col p-0 w-20 justify-center items-center bg-violet-300 hover:bg-violet-400 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer ">
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
            {/* <br /> */}
            <br />
            <p className="mb-2 text-xs font-poppins">
              Nama<span className="text-red-600">*</span>
            </p>
            <div className="mb-4 font-poppins">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                value={user.nama}
                placeholder="Nama"
              />
            </div>
            {/* <br/> */}
            <p className="mb-2 text-xs font-poppins">
              Kota<span className="text-red-600">*</span>
            </p>
            <div className="mb-4 font-poppins">
              <select class="block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                <option selected>Pilih Kota</option>
                {cities.length == 0 ? <option>Daftar Kota Kosong</option> : cities.map((city) => <option>{city.city.nama_kota}</option>)}
              </select>
            </div>
            {/* <br /> */}
            <p className="mb-2 text-xs font-poppins">
              Alamat<span className="text-red-600">*</span>
            </p>
            <div className="mb-4 font-poppins">
              <textarea
                className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                value={user.alamat}
                placeholder="Contoh: Jalan Kulon No. 2"
              ></textarea>
            </div>
            {/* <br/> */}
            <p className="mb-2 text-xs font-poppins">
              No. Handphone<span className="text-red-600">*</span>
            </p>
            <div className="mb-4 font-poppins">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                value={user.nohp}
                placeholder="Contoh: +6285739103132"
              />
            </div>
            <br />
            <button className="bg-violet-700 hover:bg-violet-900 w-full p-1.5 rounded-lg">
              <span className="text-white font-medium">Simpan</span>
            </button>
          </form>
      </div>
    </>
  );
};

export default ProfileHeaderComponent;
