import React from "react";
import { Link } from "react-router-dom";

import { FiX } from "react-icons/fi";

export default function Sidebar(props) {
	return (
		<div
			className={`w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70 relative z-[100] lg:hidden ${
				props.show ? "flex" : "hidden"
			}`}
			onClick={() => props.close()}
		>
			<div
				className="h-screen px-4 bg-white py-4 flex flex-col float-left w-48"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex justify-between items-center">
					<h1 className="font-bold text-lg">Second Hand</h1>
					<FiX
						className="text-xl text-neutral-5"
						onClick={props.close}
					/>
				</div>
				<div className="mt-4 flex flex-col">
				
						<>
							<Link to="/notif" className="mb-1">
								Notifikasi
							</Link>
							<Link to="/daftar-jual" className="mb-1">
								Daftar Jual
							</Link>
							<Link to="/akun-saya" className="mb-1">
								Akun Saya
							</Link>
						</>
					
				</div>
			</div>
		</div>
	);
}