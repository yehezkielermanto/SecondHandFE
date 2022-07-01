import React, { useEffect } from "react";
import Slider from "../components/Slider";
import NavDashboard from "../components/NavDashboar";
import ButtonDashboard from "../components/ButtonDashboard";
import CardDashboard from "../components/CardDashboard";
import HeaderProduct from "../components/HeaderProduct";
import { useSelector } from "react-redux";
import "../public/css/style.css";

const Dashboard = () => {
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <>
      {!isAuthenticated ? <NavDashboard /> : <HeaderProduct />}
      <div className="flex flex-warp items-center justify-center w-full">
        <div>
          <section>
            <Slider />
            <ButtonDashboard />
            <CardDashboard />
          </section>
          <div className="relative" id="plus">
            <div className="flex justify-center drop-shadow-lg">
              <button
                className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                + Jual
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
