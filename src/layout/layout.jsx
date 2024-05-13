import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Layout = ({ children }) => {
	return (
		<div className="bg-amber-50 font-mono tracking-widest">
			<Header />
			<div className="mx-auto max-w-screen-2xl">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
