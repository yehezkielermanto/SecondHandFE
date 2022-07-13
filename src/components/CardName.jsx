import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
                {city.length === 0 ? <small>Kota Kosong</small> : city.filter((kota) => kota.id === user.idkota).map((filteredKota) => <small>{filteredKota.nama_kota}</small>)}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row mx-2 ">
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50" className="rounded" alt="..." />
            <div className="text-start mx-3 flex flex-col">
              <h6 className="font-medium">Nama Penjual</h6>
              <p className="text-muted">
                <small>Kota</small>
              </p>
            </div>
          </div>
        )}
        <div className="flex items-center content-center justify-center p-1">
          <div>
            <Link to="/profile" className="flex h-9.5 py-1.5 px-2 border-1 border border-[#7126B5] rounded-lg hover:bg-violet-500">
              <h1>Edit</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardName;
