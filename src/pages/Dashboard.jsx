import React, { useEffect } from "react";
import "../public/css/style.css";
import Slider from "../components/Slider";
import NavDashboard from "../components/NavDashboar";
import ButtonDashboard from "../components/ButtonDashboard";
import CardDashboard from "../components/CardDashboard";
import NavbarProduk from "../components/ NavbarProduk";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <>
      <nav className="flex items-center justify-between drop-shadow-lg w-full h-20 bg-white">
        <div className="flex items-center w-20 h-20 py-5 -mx-2 lg:w-1/2">
          <div style={marginleft}></div>
          <img src={logo} alt="Logo" className="w-auto h-auto px-2" />

          <div className="flex items-center font-poppins">
            <input
              type="text"
              className="form-control block w-full lg:px-10 py-1.5 font-normal text-gray-700 border border-solid border-gray-300 rounded-[10px] m-0 text-gray-700 bg-[#EEEEEE]"
              id="exampleFormControlInput"
              placeholder="Cari disini ..."
            />
          </div>
        </div>

        <div className="flex items-center justify-end w-20 h-20 py-5 lg:w-1/2">
          <Link to="/login">
            <button
              className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <div className=" ml-1 w-5 h-5">
                <svg width="20" height="20" xmlns="http://www.w3.org/20/svg">
                  <path
                    d="M4.167 10.833h9.883l-3.025 3.634a.834.834 0 101.283 1.066l4.167-5a.987.987 0 00.075-.125c0-.041.042-.066.058-.108a.83.83 0 00.059-.3.83.83 0 00-.059-.3c0-.042-.041-.067-.058-.108a.996.996 0 00-.075-.125l-4.167-5a.833.833 0 00-1.175-.109.832.832 0 00-.108 1.175l3.025 3.634H4.167a.833.833 0 100 1.666z"
                    fill="#fff"
                  />
                </svg>
              </div>
              Masuk
            </button>
          </Link>
        </div>
        <div style={marginright}></div>
      </nav>

      <div className="flex flex-warp items-center justify-center w-full mt-10">
        <section className="h-100 gradient-form">
        </section>
      <div>
        <section>
         

          <Slider />
          <ButtonDashboard />
          <CardDashboard />
        </section>
      </div>
      </div>
    </>
  );
}

export default Dashboard;