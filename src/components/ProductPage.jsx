import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiList, FiBell, FiUser } from "react-icons/fi";
import { Carousel} from "antd";
import Sidebar from "./Sidebar";
import HeaderProduct from "./HeaderProduct"


export default function Product() {

	const onChange = (currentSlide) => {
		console.log(currentSlide);
	  };
	
	const style = {
		display: 'block',
		height: '100%',
		width: '100%',
	}

	return (
		<div className="w-screen min-h-screen">
			<Sidebar
				show={false}
				close={() => setMobileSidebarOpen(false)}
			/>
			{/* Hero */}
			<div className="drop-shadow-lg pb-12">
				{/* Header */}
				<div className="w-full flex pt-8 px-4 gap-4 lg:bg-white lg:shadow-high lg:justify-between lg:py-4 lg:px-16">
					<button
						className="w-12 h-12 p-3 bg-white rounded-2xl lg:hidden"
						onClick={() => setMobileSidebarOpen(true)}
					>
						<FiMenu className="w-full h-full" />
					</button>

					<div className="flex-grow lg:flex-grow-0 lg:flex lg:justify-center lg:items-center lg:gap-4">
						<div className="hidden lg:inline w-[5.88rem] h-8 bg-[#7126B5]"></div>
						<div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
							<input
								className="w-full h-full bg-transparent"
								placeholder="Cari di sini ..."
							/>
							<FiSearch className="text-2xl" />
						</div>
					</div>

					<div className="hidden lg:flex">
						<FiList className="xl:w-5 h-full mx-2" />
						<FiBell className="xl:w-5 h-full mx-2" />
						<FiUser className="xl:w-5 h-full mx-2" />
					</div>
				</div>
			</div>	
			<HeaderProduct/>
			<div className="md:flex items-start justify-center 2xl:px-20 md:px-6">
				<div className="xl:w-2/5 lg:w-2/5 w-80 mb-20">
					<div className="block rounded-[16px] shadow-[0px_0px_4px_rgba(0,0,0,0.15)] bg-white max-w-lg">
					<Carousel afterChange={onChange} >
							<div>
								<h3><img className="rounded-[16px]" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" /></h3>
							</div>
							<div>
								<h3><img className="rounded-[16px]" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" /></h3>
							</div>
							<div>
								<h3><img className="rounded-[16px]" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" /></h3>
							</div>
							<div>
								<h3><img className="rounded-[16px]" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" /></h3>
							</div>
						</Carousel>
					</div>	
					<div className="block p-4 rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.15)] bg-white max-w-lg mt-5">
						<h5 className="text-gray-900 text-sm leading-tight font-medium mb-3">Deskripsi</h5>
						<p className="text-sm font-regular lg:leading-tight leading-normal text-[#8A8A8A] dark:text-[#8A8A8A] mt-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p className="text-sm font-regular lg:leading-tight leading-normal text-[#8A8A8A] dark:text-[#8A8A8A] mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						</div>	
					</div>
				<div className="xl:w-2/6 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
					<div className="block p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white max-w-xs">
						<h5 className="text-gray-900 text-lg leading-tight font-medium mb-2">Jam Tangan Casio</h5>
						<p className="text-gray-400 text-regular mb-4">Aksesoris</p>
						<h5 className="text-gray-900 text-base leading-tight font-regular mb-5">Rp 250.000</h5>
						<button type="button" className="inline-blocmb-2 w-full mb-3 inline-block px-6 py-2.5 bg-[#7126B5] text-white font-medium text-xs leading-normal rounded-[16px] shadow-md hover:bg-[#8f48cf] hover:shadow-lg focus:bg-[#8f48cf] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-outk px-6 py-2.5 bg-[#7126B5] text-white font-medium text-xs leading-tight rounded-[16px] shadow-md hover:bg-[#8f48cf] hover:shadow-lg focus:bg-[#8f48cf] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Terbitkan</button>
						<button type="button" className="w-full inline-block px-6 py-2 border-2 border-[#7126B5] text-[#7126B5] font-medium text-xs leading-normal rounded-[16px] hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Edit</button>
					</div>
					<div className="block p-4 md:flex rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.15)] bg-white max-w-xs mt-5 ">
						<div className="mr-3">
						<img className="w-12 h-12 rounded rounded-[12px]" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
						</div>
						<div className="">
						<h5 className="text-gray-900 text-sm leading-tight font-semibold my-1">Jam Tangan Casio</h5>
						<p className="text-gray-400 text-xs mb-0">Aksesoris</p>
						</div>
					</div>
				</div>
			</div>	
		</div>
	);
}