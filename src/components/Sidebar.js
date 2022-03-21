import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../App.css";
import { routes } from "./SidebarData";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
function Sidebar({ children }) {
	return (
		<div className="main-component">
			<motion.div animate={{ width: "250px" }} className="sidebar">
				<div className="sidebar-header">
					<div className="logo">
						<h2>
							<RiNeteaseCloudMusicFill /> Muser
						</h2>
					</div>
					<button className="hamb-btn">
						<GiHamburgerMenu />
					</button>
				</div>
				<section className="routes">
					{routes.map((route) => (
						<NavLink to={route.path} key={route.name} className="list-item">
							<div className="icon">{route.icon}</div>
							<div className="link-text">{route.name}</div>
						</NavLink>
					))}
				</section>
				<button className="px-2 py-1 border border-0 btn-danger rounded-3 shadow w-75 add-music-btn">
					ADD MUSIC
				</button>
			</motion.div>
			<main>{children}</main>
		</div>
	);
}

export default Sidebar;
