import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export const Header = () => {
	const [open, setOpen] = useState(false); // State variable to track menu visibility

	return (
		<>
			<div className="antialiased  max-w-screen-2xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 ">
				<div className="w-full text-gray-900">
					<div className="flex flex-col  px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
						<div className="flex flex-row items-center justify-between">
							<a>
								<object
									data="icon.svg"
									type="image/svg+xml"
									class="w-1/6 h-auto"
								>
									Your browser does not support SVGs.
								</object>{" "}
							</a>
							{/* Mobile Menu Button */}
							<button
								className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
								onClick={() => setOpen(!open)}
							>
								{open ? (
									<XMarkIcon className="w-6 h-6" />
								) : (
									<Bars3Icon className="w-6 h-6" />
								)}
							</button>
						</div>
						{/* Navigation Menu (Hidden by default on mobile) */}
						<nav
							className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${
								open ? "flex" : "hidden"
							}`}
						>
							<a
								href="/trials"
								className="px-4 py-2 mt-2 text-md md:mt-0 md:ml-4 text-rose-500 hover:text-gray-900 focus:text-gray-900  focus:outline-none focus:shadow-outline"
							>
								ACERCA DE MI
							</a>
							<a
								href="/profile"
								className="px-4 py-2 mt-2 text-md md:mt-0 md:ml-4 hover:text-rose-500 focus:text-gray-900  focus:outline-none focus:shadow-outline"
							>
								PORTFOLIO
							</a>
							<a className="px-4 py-2 mt-2 text-md md:mt-0 md:ml-4 hover:text-rose-500 focus:text-gray-900  focus:outline-none focus:shadow-outline">
								CONTACTO
							</a>
						</nav>
					</div>
				</div>
			</div>
			{/* Optional: Background overlay for open menu on mobile (can be styled) */}
			<Dialog open={open} onClose={() => setOpen(false)}>
				<Dialog.Overlay className="fixed inset-0 bg-gray-500/50" />
			</Dialog>
		</>
	);
};

export default Header;
