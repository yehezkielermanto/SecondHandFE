import React, { useState, useEffect } from "react";
import { FiSearch, FiList, FiBell, FiUser, FiArrowLeft } from "react-icons/fi";
import Image from "../img/productDetails.png"
import Seller from "../img/seller.png"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom'


export default function Product() {

	return (
		<div className="w-screen min-h-screen">
			<div className="drop-shadow-lg lg:pb-10">
				<div className="w-full pt-8 px-4 gap-4 md:bg-white md:shadow-high md:justify-between md:py-4 md:px-16 hidden md:flex items-center">
					<div className="flex-grow md:flex-grow-0 md:flex md:justify-center md:items-center md:gap-4">
					<Link to="/" className="hidden lg:inline w-[5.88rem] h-8 bg-[#4B1979] my-2" />
						<div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex md:bg-[#EEEEEE]">
							<input
								className="w-full h-full bg-transparent"
								placeholder="Cari di sini ..."
							/>
							<FiSearch className="text-2xl" />
						</div>
					</div>

					<div className="flex gap-4 items-center text-2xl">
						<FiList />
						<FiBell />
						<Link to="/user">
								<FiUser className="xl:w-5 h-full mx-2" />
							</Link>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row md:mx-auto md:max-w-screen-lg md:mt-4 md:mx-auto md:px-0 md:pb-0 ">
				<div className="w-full aspect-[6/5] relative md:w-3/5 md:flex-shrink-0 ">
					<Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
						<img className="w-full aspect-[6/5] object-cover md:rounded-xl" src={Image} />
						<img className="w-full aspect-[6/5] object-cover md:rounded-xl" src={Image} />
					</Carousel>
					<button className="absolute top-4 left-4 rounded-full w-8 h-8 bg-white flex justify-center items-center">
						<FiArrowLeft />
					</button>
				</div>

				<div className="px-4 flex flex-col relative bottom-2 gap-4 md:flex-grow md:bottom-0 ">
					<div className="w-full relative md:w-4/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white">
						<h1 className="font-medium">Jam Tangan Casio</h1>
						<p className="text-sm text-neutral-3">Aksesoris</p>
						<p className="">Rp 250.000</p>

						<button className="hidden md:block w-full bg-[#FF0000] font-medium text-white text-center py-2 mt-4 rounded-lg">
							Hapus
						</button>
						<Link to="/product">
						<button className="hidden md:block w-full border border-[#7126B5] bg-white font-medium text-neutral-5 text-center py-2 mt-4 rounded-lg">
							Edit
						</button>
						</Link>
					</div>

					<div className="flex bg-white rounded-xl py-4 shadow-low gap-4 p-4 w-full relative md:w-4/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white">
						<img className="h-14 aspect-square rounded-xl object-cover" src={Seller} />
						<div className="flex flex-col justify-center">
							<h1 className="font-medium">Nama Penjual</h1>
							<p className="text-sm text-neutral-3">Kota</p>
						</div>
					</div>
				</div>
			</div>

			<div className="pb-5 px-4 mt-2 mb-10 md:max-w-screen-lg md:mt-4 md:mx-auto md:px-0 md:pb-0 ">
				<div className="w-full relative md:w-3/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.15)] bg-white mt-5">
					<h1 className="font-medium mb-5">Deskripsi</h1>
					<p className="text-sm font-regular lg:leading-tight leading-normal text-[#8A8A8A] dark:text-[#8A8A8A]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at vestibulum tortor. Pellentesque tristique augue lorem, eget lacinia diam rutrum in. In pretium lacus vel dolor finibus, nec molestie sapien condimentum. Morbi mollis hendrerit eros quis viverra. Donec augue magna, mattis id lectus id, congue venenatis odio. Ut a consectetur eros. Phasellus convallis convallis vestibulum. Curabitur fermentum dolor quam, vitae ultricies sem facilisis eget. Suspendisse et blandit ex. Nullam libero orci, placerat sed posuere pretium, vestibulum quis tellus. Maecenas ut massa auctor, mollis nulla non, consectetur augue. Morbi malesuada vulputate dolor ac tempus. Cras nec nisl tincidunt, venenatis eros quis, tincidunt dolor. Nulla facilisi. Fusce at luctus risus.
					</p>
					<p className="text-sm font-regular lg:leading-tight leading-normal text-[#8A8A8A] dark:text-[#8A8A8A] mt-3 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>

			<div className="fixed w-full bottom-4 px-4 md:hidden">
				<button className="bg-[#7126B5] font-medium text-white text-center py-4 w-full rounded-xl">
					Terbitkan
				</button>
			</div>
		</div>
	);
}