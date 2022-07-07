import React from "react";
import "../public/css/style.css";
import product1 from "../img/product.png";
import { useDispatch, useSelector } from "react-redux";

const CardDashboard = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <>
      {product === undefined ? (
        <></>
      ) : (
        <>
          {product.length === 0 ? (
            <div>
              <h4 className="content-center font-semibold">
                Produk Tidak Tersedia
              </h4>
            </div>
          ) : (
            product.data.barang.map((product) => (
              <div className="flex justify-center">
                <div
                  id="card"
                  className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 md:grid-cols-5  mt-5 w-fit relative z-30 overflow-x-hidden"
                >
                  <div className="inline-block m-1 border border-gray-300 p-1 rounded-lg">
                    <img src={product1} alt="" className="w-full" />
                    <h3 className="font-semibold">{product.nama}</h3>
                    <p>{product.deskripsi}</p>
                    <h3 className="font-semibold">{product.harga}</h3>
                  </div>
                </div>
              </div>
            ))
          )}
          ;
        </>
      )}
    </>
  );
};

export default CardDashboard;
