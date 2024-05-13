import React from "react";
import {
	RiPinterestLine,
	RiInstagramLine,
	RiFacebookBoxLine,
	RiLinkedinLine,
} from "react-icons/ri";

export const Footer = () => {
	return (
		<section className="">
			<div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
				<nav className="flex flex-wrap justify-center -mx-5 -my-2">
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-500 hover:text-gray-900"
						>
							INICIO
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-500 hover:text-gray-900"
						>
							PORTFOLIO
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-500 hover:text-gray-900"
						>
							ACERCA DE MI
						</a>
					</div>
					<div className="px-5 py-2">
						<a
							href="#"
							className="text-base leading-6 text-gray-500 hover:text-gray-900"
						>
							CONTACTO
						</a>
					</div>
				</nav>
				<div className="flex justify-center mt-8 space-x-6">
					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Pinterest</span>
						<RiPinterestLine className="w-6 h-6" />
					</a>

					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Instagram</span>
						<RiInstagramLine className="w-6 h-6" />
					</a>

					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Facebook</span>
						<RiFacebookBoxLine className="w-6 h-6" />
					</a>

					<a href="#" className="text-gray-400 hover:text-gray-500">
						<span className="sr-only">Linkedin</span>
						<RiLinkedinLine className="w-6 h-6" />
					</a>
				</div>
				<p className="mt-8 text-base leading-6 text-center text-gray-400">
					© 2024 Caterina Nieto All rights reserved.
				</p>
			</div>
		</section>
	);
};

export default Footer;
