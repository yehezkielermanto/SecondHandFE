import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/usersActions";
import { listCities } from "../redux/actions/citiesActions";
import { IKImage } from "imagekitio-react";
const urlImg = "https://ik.imagekit.io/jmprup9kb";

const CardName = (props) => {
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const { user, errorU } = useSelector((state) => state.users);
  const { city, errorC } = useSelector((state) => state.cities);

   useEffect(() => {
     if (isAuthenticated) {
       dispatch(fetchUser());
     }
   }, [isAuthenticated]);

   useEffect(() => {
     (async () => {
       dispatch(listCities());
     })();
   }, [dispatch]);

   useEffect(() => {
     if (error) {
       Swal.fire({
         position: "center",
         icon: "error",
         titleText: error,
         showConfirmButton: false,
         timer: 3000,
       });

       dispatch(logout());
     }
   }, [error]);

   useEffect(() => {
     if (errorU) {
       Swal.fire({
         position: "center",
         icon: "error",
         titleText: errorU,
         showConfirmButton: false,
         timer: 3000,
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
         timer: 3000,
       });
       // alert(errorC);
     }
   }, [errorC]);

  return (
    <>
      <div className="border p-4 rounded-[16px]">
        <div className="flex justify-between">
          {isAuthenticated ? (
            <div className="flex flex-row mx-2">
              {/* <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50" className="rounded" alt="..." /> */}
              <IKImage
                className="rounded"
                urlEndpoint={urlImg}
                path={user?.imgFileData?.filePath}
                transformation={[
                  {
                    h: 96,
                    w: 96,
                  },
                ]}
              />
              <div className="text-start mx-3 flex flex-col">
                <h6 className="font-medium">{user.nama}</h6>
                <p className="text-muted">
                  {city.length === 0 ? (
                    <small>Kota Kosong</small>
                  ) : (
                    city.filter((kota) =>
                      user.idkota == kota.id ? (
                        <small>
                          {kota.id}-{kota.nama_kota}
                        </small>
                      ) : (
                        <small>Kota Tidak Ditemukan</small>
                      )
                    )
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row mx-2">
              <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50" className="rounded" alt="..." />
              <div className="text-start mx-3 flex flex-col">
                <h6 className="font-medium">Nama Penjual</h6>
                <p className="text-muted">
                  <small>Kota</small>
                </p>
              </div>
            </div>
          )}
          <div className="flex-grow-1 ms-3">
            <button type="button" className="btn btn-outline-primary bg-white  border border-[#7126B5] mt-2 px-2 btn-sm float-end font-medium rounded-[8px]">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardName
