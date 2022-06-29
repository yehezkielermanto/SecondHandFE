import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import {
  FiBox,
  FiChevronRight,
  FiDollarSign,
  FiHeart,
  FiPlus,
} from "react-icons/fi";

import emptyImage from "../assets/undraw_selection.svg";
import Header from "../components/Header";
import configs from "../utils/configs";
import { formatRupiah } from "../utils/helpers";

export default function DaftarJualSaya() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const name = useSelector((state) => state.auth.name);
  const profilePic = useSelector((state) => state.auth.profilePhoto);
  const city = useSelector((state) => state.auth.city);

  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [diminatis, setDiminatis] = useState([]);
  const [terjuals, setTerjuals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          url: `${configs.apiRootURL}/products/my-products`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data.products);
        setDiminatis(response.data.diminati);
        setTerjuals(response.data.terjual);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    fetchData();
  }, [token, navigate]);

  return (
    <div className="w-screen min-h-screen">
      <Header title="Daftar Jual Saya" />

      <div className="flex flex-col w-full px-4 py-8 lg:max-w-screen-lg lg:mx-auto">
        <h1 className="hidden lg:block font-bold text-xl mb-4">
          Daftar Jual Saya
        </h1>

        {/* Penjual */}
        <div className="shadow-low w-full flex rounded-lg p-4 items-center">
          <img
            src={profilePic}
            alt="Penjual"
            className="w-12 h-12 object-cover flex-none"
          />
          <div className="flex-grow flex flex-col justify-center px-4">
            <p className="font-medium text-neutral-5">{name}</p>
            <p className="text-xs text-neutral-3">{city}</p>
          </div>
          <div className="flex-none flex items-center">
            <Link
              to="/profil"
              className="border border-purple-4 rounded-xl px-4 py-1 font-medium text-neutral-5 focus:ring-2 focus:outline-none focus:ring-purple-4 hover:bg-gray-100"
            >
              Edit
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full overflow-x-auto flex gap-2 mt-2 py-2 pl-2 lg:hidden">
          <button
            onClick={() => setActiveTab(0)}
            className={`btn ${
              activeTab === 0 ? "mobile-category-active" : "mobile-category"
            }`}
          >
            <FiBox /> Produk
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className={`btn ${
              activeTab === 1 ? "mobile-category-active" : "mobile-category"
            }`}
          >
            <FiHeart /> Diminati
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={`btn ${
              activeTab === 2 ? "mobile-category-active" : "mobile-category"
            }`}
          >
            <FiDollarSign /> Terjual
          </button>
        </div>

        <div className="flex mt-4 gap-8">
          {/* Dekstop Categories */}
          <div className="hidden lg:flex w-56 shadow-high bg-white py-4 rounded-xl flex-col gap-2 flex-none self-start">
            <p className="font-medium text-black px-4">Kategori</p>

            <div className="flex flex-col divide-y divide-[#E5E5E5]">
              <button
                className={`flex justify-between items-center py-3 px-4 ${
                  activeTab === 0 && "text-purple-4 font-medium"
                } hover:bg-gray-200 focus:outline-none focus:bg-gray-200`}
                onClick={() => setActiveTab(0)}
              >
                <span className="flex gap-2 items-center">
                  <FiBox /> Semua Produk
                </span>
                <FiChevronRight
                  className={activeTab !== 0 && "text-neutral-2"}
                />
              </button>
              <button
                className={`flex justify-between items-center py-3 px-4 ${
                  activeTab === 1 && "text-purple-4 font-medium"
                } hover:bg-gray-200 focus:outline-none focus:bg-gray-200`}
                onClick={() => setActiveTab(1)}
              >
                <span className="flex gap-2 items-center">
                  <FiHeart /> Diminati
                </span>
                <FiChevronRight
                  className={activeTab !== 1 && "text-neutral-2"}
                />
              </button>
              <button
                className={`flex justify-between items-center py-3 px-4 ${
                  activeTab === 2 && "text-purple-4 font-medium"
                } hover:bg-gray-200 focus:outline-none focus:bg-gray-200`}
                onClick={() => setActiveTab(2)}
              >
                <span className="flex gap-2 items-center">
                  <FiDollarSign /> Terjual
                </span>
                <FiChevronRight
                  className={activeTab !== 2 && "text-neutral-2"}
                />
              </button>
            </div>
          </div>

          {/* Fragment Container */}
          <div className="w-full">
            {activeTab === 0
              ? renderProductFragment(products, loading)
              : activeTab === 1
              ? renderDiminatiFragment(diminatis, loading)
              : activeTab === 2
              ? renderTerjualFragment(terjuals, loading)
              : "Invalid tab!"}
          </div>
        </div>
      </div>
    </div>
  );
}

const renderTerjualFragment = (terjuals, isLoading) => {
  return (
    <div className="flex flex-col divide-y px-4 divide-[#E5E5E5]">
      {isLoading ? (
        [...new Array(12)].map((_, i) => (
          <div className="flex gap-4 py-3" key={i}>
            <div className="w-12 h-12 rounded-lg flex-none animate-pulse bg-slate-700" />

            <div className="flex-grow flex flex-col gap-2">
              <div className="w-20 h-3 bg-slate-700 animate-pulse rounded-md" />
              <div className="w-32 h-4 bg-slate-700 animate-pulse rounded-md" />
              <div className="w-24 h-4 bg-slate-700 animate-pulse rounded-md" />
              <div className="w-28 h-4 bg-slate-700 animate-pulse rounded-md" />
            </div>

            <div className="w-20 h-3 bg-slate-700 animate-pulse rounded-md" />
          </div>
        ))
      ) : terjuals.length ? (
        terjuals.map((terjual) => (
          <Link
            to={{ pathname: "/penawaran", state: { bidId: terjual.id } }}
            key={terjual.id}
            className="flex gap-4 py-3"
          >
            <img
              className="w-12 h-12 object-cover rounded-lg flex-none"
              alt="Foto Produk"
              src={terjual.image}
            />

            <div className="flex-grow flex flex-col">
              <p className="text-xs text-neutral-3">Penjualan Produk</p>
              <p>{terjual.name}</p>
              <p>
                <s>{formatRupiah(terjual.price)}</s>
              </p>
              <p>Terjual {formatRupiah(terjual.bidPrice)}</p>
            </div>

            <span className="flex-none text-xs text-neutral-3">
              20 Apr, 14:04
            </span>
          </Link>
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center py-8 gap-4">
          <img className="h-64" src={emptyImage} alt="Ilustrasi" />
          <p className="text-center text-neutral-3">
            Belum ada produkmu yang terjual nih, sabar ya rejeki nggak kemana
            kok
          </p>
        </div>
      )}
    </div>
  );
};

const renderDiminatiFragment = (diminatis, isLoading) => {
  return (
    <div className="flex flex-col divide-y px-4 divide-[#E5E5E5]">
      {isLoading ? (
        [...new Array(12)].map((_, i) => (
          <div className="flex gap-4 py-3" key={i}>
            <div className="w-12 h-12 rounded-lg flex-none animate-pulse bg-slate-700" />

            <div className="flex-grow flex flex-col gap-2">
              <div className="w-20 h-3 bg-slate-700 animate-pulse rounded-md" />
              <div className="w-32 h-4 bg-slate-700 animate-pulse rounded-md" />
              <div className="w-24 h-4 bg-slate-700 animate-pulse rounded-md" />
              <div className="w-28 h-4 bg-slate-700 animate-pulse rounded-md" />
            </div>

            <div className="w-20 h-3 bg-slate-700 animate-pulse rounded-md" />
          </div>
        ))
      ) : diminatis.length ? (
        diminatis.map((diminati) => (
          <Link
            to={{ pathname: "/penawaran", state: { bidId: diminati.id } }}
            key={diminati.id}
            className="flex gap-4 py-3"
          >
            <img
              className="w-12 h-12 object-cover rounded-lg flex-none"
              alt="Foto Produk"
              src={diminati.image}
            />

            <div className="flex-grow flex flex-col">
              <p className="text-xs text-neutral-3">Penawaran Produk</p>
              <p>{diminati.name}</p>
              <p>{formatRupiah(diminati.price)}</p>
              <p>Ditawar {formatRupiah(diminati.bidPrice)}</p>
            </div>

            <span className="flex-none text-xs text-neutral-3">
              20 Apr, 14:04
            </span>
          </Link>
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center py-8 gap-4">
          <img className="h-64" src={emptyImage} alt="Ilustrasi" />
          <p className="text-center text-neutral-3">
            Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana
            kok
          </p>
        </div>
      )}
    </div>
  );
};

const renderProductFragment = (products, isLoading) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {/* Add Product */}
      <Link
        to="/buat-produk"
        className="flex flex-col justify-center items-center w-full h-full min-h-[16rem] border border-neutral-2 border-dashed text-neutral-3 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2 focus:outline-none"
      >
        <FiPlus />
        <p>Tambah Produk</p>
      </Link>

      {isLoading
        ? [...new Array(11)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col w-full h-full items-start bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2 animate-pulse"
            >
              <div className="w-full aspect-[7/5] object-cover bg-slate-700" />
              <div className="w-32 h-4 bg-slate-700 rounded-md" />
              <div className="w-24 h-3 bg-slate-700 rounded-md" />
              <div className="w-28 h-4 bg-slate-700 rounded-md" />
            </div>
          ))
        : products.map((product) => (
            <Link
              to={{ pathname: "/edit-produk", state: product }}
              key={product.id}
              className="flex flex-col w-full h-full items-start bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2"
            >
              <img
                className="w-full aspect-[7/5] object-cover"
                alt="Foto Produk"
                src={product.image}
              />
              <p className="text-neutral-5">{product.name}</p>
              <p className="text-xs text-neutral-3">{product.category}</p>
              <p className="text-neutral-5">{formatRupiah(product.price)}</p>
            </Link>
          ))}
    </div>
  );
};
